import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import patient as shared_patient


@dataclasses.dataclass
class PatientsSummaryReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientsSummaryReadQueryParams:
    date_of_birth: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_of_birth', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_name', 'style': 'form', 'explode': True }})
    gender: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gender', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_name', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientsSummaryReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientsSummaryReadRequest:
    path_params: PatientsSummaryReadPathParams = dataclasses.field()
    query_params: PatientsSummaryReadQueryParams = dataclasses.field()
    security: PatientsSummaryReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientsSummaryReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient: Optional[shared_patient.Patient] = dataclasses.field(default=None)
    
