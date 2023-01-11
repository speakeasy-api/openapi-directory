import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AppointmentProfilesDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppointmentProfilesDeleteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentProfilesDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentProfilesDeleteRequest:
    path_params: AppointmentProfilesDeletePathParams = dataclasses.field()
    query_params: AppointmentProfilesDeleteQueryParams = dataclasses.field()
    security: AppointmentProfilesDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentProfilesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
