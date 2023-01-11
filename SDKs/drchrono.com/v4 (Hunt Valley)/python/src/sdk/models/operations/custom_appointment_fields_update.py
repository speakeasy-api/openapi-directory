import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CustomAppointmentFieldsUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CustomAppointmentFieldsUpdateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomAppointmentFieldsUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CustomAppointmentFieldsUpdateRequest:
    path_params: CustomAppointmentFieldsUpdatePathParams = dataclasses.field()
    query_params: CustomAppointmentFieldsUpdateQueryParams = dataclasses.field()
    security: CustomAppointmentFieldsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomAppointmentFieldsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
