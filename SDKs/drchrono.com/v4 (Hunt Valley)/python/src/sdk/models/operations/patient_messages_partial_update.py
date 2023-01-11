import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PatientMessagesPartialUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientMessagesPartialUpdateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientMessagesPartialUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientMessagesPartialUpdateRequest:
    path_params: PatientMessagesPartialUpdatePathParams = dataclasses.field()
    query_params: PatientMessagesPartialUpdateQueryParams = dataclasses.field()
    security: PatientMessagesPartialUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientMessagesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
