import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import appointmentprofile as shared_appointmentprofile


@dataclasses.dataclass
class AppointmentProfilesCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentProfilesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentProfilesCreateRequest:
    query_params: AppointmentProfilesCreateQueryParams = dataclasses.field()
    security: AppointmentProfilesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentProfilesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_profile: Optional[shared_appointmentprofile.AppointmentProfile] = dataclasses.field(default=None)
    
