import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientintervention as shared_patientintervention


@dataclasses.dataclass
class PatientInterventionsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientInterventionsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientInterventionsCreateRequest:
    query_params: PatientInterventionsCreateQueryParams = dataclasses.field()
    security: PatientInterventionsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientInterventionsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_intervention: Optional[shared_patientintervention.PatientIntervention] = dataclasses.field(default=None)
    
