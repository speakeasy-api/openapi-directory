import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import doctor as shared_doctor


@dataclasses.dataclass
class DoctorsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DoctorsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DoctorsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DoctorsReadRequest:
    path_params: DoctorsReadPathParams = dataclasses.field()
    query_params: DoctorsReadQueryParams = dataclasses.field()
    security: DoctorsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DoctorsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    doctor: Optional[shared_doctor.Doctor] = dataclasses.field(default=None)
    
