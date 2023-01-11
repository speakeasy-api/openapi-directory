import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import appointmenttemplate as shared_appointmenttemplate


@dataclasses.dataclass
class AppointmentTemplatesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppointmentTemplatesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    profile: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'profile', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentTemplatesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentTemplatesReadRequest:
    path_params: AppointmentTemplatesReadPathParams = dataclasses.field()
    query_params: AppointmentTemplatesReadQueryParams = dataclasses.field()
    security: AppointmentTemplatesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment_template: Optional[shared_appointmenttemplate.AppointmentTemplate] = dataclasses.field(default=None)
    
