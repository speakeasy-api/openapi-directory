import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ConsentFormsUnapplyFromAppointmentPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConsentFormsUnapplyFromAppointmentQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ConsentFormsUnapplyFromAppointmentSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ConsentFormsUnapplyFromAppointmentRequest:
    path_params: ConsentFormsUnapplyFromAppointmentPathParams = dataclasses.field()
    query_params: ConsentFormsUnapplyFromAppointmentQueryParams = dataclasses.field()
    security: ConsentFormsUnapplyFromAppointmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConsentFormsUnapplyFromAppointmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
