import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientphysicalexam as shared_patientphysicalexam


@dataclasses.dataclass
class PatientPhysicalExamsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientPhysicalExamsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientPhysicalExamsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientPhysicalExamsReadRequest:
    path_params: PatientPhysicalExamsReadPathParams = dataclasses.field()
    query_params: PatientPhysicalExamsReadQueryParams = dataclasses.field()
    security: PatientPhysicalExamsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientPhysicalExamsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_physical_exam: Optional[shared_patientphysicalexam.PatientPhysicalExam] = dataclasses.field(default=None)
    
