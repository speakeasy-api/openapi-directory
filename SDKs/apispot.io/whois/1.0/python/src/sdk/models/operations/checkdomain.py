import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CheckDomainPathParams:
    domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CheckDomain200ApplicationJSON:
    is_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAvailable') }})
    

@dataclasses.dataclass
class CheckDomainRequest:
    path_params: CheckDomainPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CheckDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_domain_200_application_json_object: Optional[CheckDomain200ApplicationJSON] = dataclasses.field(default=None)
    
