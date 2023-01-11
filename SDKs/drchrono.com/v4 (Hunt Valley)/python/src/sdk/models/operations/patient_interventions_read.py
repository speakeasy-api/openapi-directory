import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientintervention as shared_patientintervention


@dataclasses.dataclass
class PatientInterventionsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientInterventionsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientInterventionsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientInterventionsReadRequest:
    path_params: PatientInterventionsReadPathParams = dataclasses.field()
    query_params: PatientInterventionsReadQueryParams = dataclasses.field()
    security: PatientInterventionsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientInterventionsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_intervention: Optional[shared_patientintervention.PatientIntervention] = dataclasses.field(default=None)
    
