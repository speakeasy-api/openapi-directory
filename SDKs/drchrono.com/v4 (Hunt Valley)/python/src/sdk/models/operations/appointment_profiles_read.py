import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import appointmentprofile as shared_appointmentprofile


@dataclasses.dataclass
class AppointmentProfilesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppointmentProfilesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentProfilesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentProfilesReadRequest:
    path_params: AppointmentProfilesReadPathParams = dataclasses.field()
    query_params: AppointmentProfilesReadQueryParams = dataclasses.field()
    security: AppointmentProfilesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentProfilesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_profile: Optional[shared_appointmentprofile.AppointmentProfile] = dataclasses.field(default=None)
    
