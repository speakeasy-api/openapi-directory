import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import customappointmentfieldtype as shared_customappointmentfieldtype


@dataclasses.dataclass
class CustomAppointmentFieldsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CustomAppointmentFieldsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomAppointmentFieldsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CustomAppointmentFieldsReadRequest:
    path_params: CustomAppointmentFieldsReadPathParams = dataclasses.field()
    query_params: CustomAppointmentFieldsReadQueryParams = dataclasses.field()
    security: CustomAppointmentFieldsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomAppointmentFieldsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_appointment_field_type: Optional[shared_customappointmentfieldtype.CustomAppointmentFieldType] = dataclasses.field(default=None)
    
