import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ConsentFormsApplyToAppointmentPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConsentFormsApplyToAppointmentQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ConsentFormsApplyToAppointmentSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ConsentFormsApplyToAppointmentRequest:
    path_params: ConsentFormsApplyToAppointmentPathParams = dataclasses.field()
    query_params: ConsentFormsApplyToAppointmentQueryParams = dataclasses.field()
    security: ConsentFormsApplyToAppointmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConsentFormsApplyToAppointmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
