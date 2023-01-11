import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientphysicalexam as shared_patientphysicalexam


@dataclasses.dataclass
class PatientPhysicalExamsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientPhysicalExamsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientPhysicalExamsCreateRequest:
    query_params: PatientPhysicalExamsCreateQueryParams = dataclasses.field()
    security: PatientPhysicalExamsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientPhysicalExamsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_physical_exam: Optional[shared_patientphysicalexam.PatientPhysicalExam] = dataclasses.field(default=None)
    
