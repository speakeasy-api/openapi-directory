import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientvaccinerecord as shared_patientvaccinerecord


@dataclasses.dataclass
class PatientVaccineRecordsCreateQueryParams:
    cvx_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cvx_code', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientVaccineRecordsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientVaccineRecordsCreateRequest:
    query_params: PatientVaccineRecordsCreateQueryParams = dataclasses.field()
    security: PatientVaccineRecordsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientVaccineRecordsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_vaccine_record: Optional[shared_patientvaccinerecord.PatientVaccineRecord] = dataclasses.field(default=None)
    
