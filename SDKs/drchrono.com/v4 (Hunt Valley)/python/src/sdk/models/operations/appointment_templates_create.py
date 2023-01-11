import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import appointmenttemplate as shared_appointmenttemplate


@dataclasses.dataclass
class AppointmentTemplatesCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    profile: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'profile', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentTemplatesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentTemplatesCreateRequest:
    query_params: AppointmentTemplatesCreateQueryParams = dataclasses.field()
    security: AppointmentTemplatesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_template: Optional[shared_appointmenttemplate.AppointmentTemplate] = dataclasses.field(default=None)
    
