import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import customappointmentfieldtype as shared_customappointmentfieldtype


@dataclasses.dataclass
class CustomAppointmentFieldsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomAppointmentFieldsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CustomAppointmentFieldsCreateRequest:
    query_params: CustomAppointmentFieldsCreateQueryParams = dataclasses.field()
    security: CustomAppointmentFieldsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomAppointmentFieldsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_appointment_field_type: Optional[shared_customappointmentfieldtype.CustomAppointmentFieldType] = dataclasses.field(default=None)
    
