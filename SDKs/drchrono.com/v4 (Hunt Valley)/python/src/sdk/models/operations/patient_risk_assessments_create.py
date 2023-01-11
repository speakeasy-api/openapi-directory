import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientriskassessment as shared_patientriskassessment


@dataclasses.dataclass
class PatientRiskAssessmentsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientRiskAssessmentsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientRiskAssessmentsCreateRequest:
    query_params: PatientRiskAssessmentsCreateQueryParams = dataclasses.field()
    security: PatientRiskAssessmentsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientRiskAssessmentsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_risk_assessment: Optional[shared_patientriskassessment.PatientRiskAssessment] = dataclasses.field(default=None)
    
