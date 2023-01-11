import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import appointment as shared_appointment


@dataclasses.dataclass
class AppointmentsCreateQueryParams:
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_range', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentsCreateRequest:
    query_params: AppointmentsCreateQueryParams = dataclasses.field()
    security: AppointmentsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    appointment: Optional[shared_appointment.Appointment] = dataclasses.field(default=None)
    
