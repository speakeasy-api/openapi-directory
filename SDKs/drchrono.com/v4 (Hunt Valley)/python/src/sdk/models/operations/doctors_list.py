import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import doctor as shared_doctor


@dataclasses.dataclass
class DoctorsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DoctorsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class DoctorsList200ApplicationJSON:
    r"""DoctorsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_doctor.Doctor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DoctorsListRequest:
    query_params: DoctorsListQueryParams = dataclasses.field()
    security: DoctorsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DoctorsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    doctors_list_200_application_json_object: Optional[DoctorsList200ApplicationJSON] = dataclasses.field(default=None)
    
