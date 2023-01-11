import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientcommunication as shared_patientcommunication


@dataclasses.dataclass
class PatientCommunicationsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientCommunicationsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientCommunicationsCreateRequest:
    query_params: PatientCommunicationsCreateQueryParams = dataclasses.field()
    security: PatientCommunicationsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientCommunicationsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_communication: Optional[shared_patientcommunication.PatientCommunication] = dataclasses.field(default=None)
    
