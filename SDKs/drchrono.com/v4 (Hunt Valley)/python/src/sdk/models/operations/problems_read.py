import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientproblem as shared_patientproblem


@dataclasses.dataclass
class ProblemsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProblemsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProblemsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ProblemsReadRequest:
    path_params: ProblemsReadPathParams = dataclasses.field()
    query_params: ProblemsReadQueryParams = dataclasses.field()
    security: ProblemsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProblemsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_problem: Optional[shared_patientproblem.PatientProblem] = dataclasses.field(default=None)
    
