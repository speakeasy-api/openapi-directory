import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SignDeletePathParams:
    job: str = dataclasses.field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SignDelete200ApplicationJSON:
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class SignDeleteRequest:
    path_params: SignDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SignDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    sign_delete_200_application_json_object: Optional[SignDelete200ApplicationJSON] = dataclasses.field(default=None)
    
