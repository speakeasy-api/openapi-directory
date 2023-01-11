import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PatientVaccineRecordsUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientVaccineRecordsUpdateQueryParams:
    cvx_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cvx_code', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientVaccineRecordsUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientVaccineRecordsUpdateRequest:
    path_params: PatientVaccineRecordsUpdatePathParams = dataclasses.field()
    query_params: PatientVaccineRecordsUpdateQueryParams = dataclasses.field()
    security: PatientVaccineRecordsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientVaccineRecordsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
