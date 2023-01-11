import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import patient as shared_patient


@dataclasses.dataclass
class PatientsSummaryCreateQueryParams:
    date_of_birth: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_of_birth', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_name', 'style': 'form', 'explode': True }})
    gender: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gender', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_name', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientsSummaryCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientsSummaryCreateRequest:
    query_params: PatientsSummaryCreateQueryParams = dataclasses.field()
    security: PatientsSummaryCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientsSummaryCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient: Optional[shared_patient.Patient] = dataclasses.field(default=None)
    
