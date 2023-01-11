import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import customvitaltype as shared_customvitaltype


@dataclasses.dataclass
class CustomVitalsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomVitalsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CustomVitalsList200ApplicationJSON:
    r"""CustomVitalsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_customvitaltype.CustomVitalType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class CustomVitalsListRequest:
    query_params: CustomVitalsListQueryParams = dataclasses.field()
    security: CustomVitalsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomVitalsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_vitals_list_200_application_json_object: Optional[CustomVitalsList200ApplicationJSON] = dataclasses.field(default=None)
    
