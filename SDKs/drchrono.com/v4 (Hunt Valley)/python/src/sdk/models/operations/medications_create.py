import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientdrug as shared_patientdrug


@dataclasses.dataclass
class MedicationsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MedicationsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MedicationsCreateRequest:
    query_params: MedicationsCreateQueryParams = dataclasses.field()
    security: MedicationsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MedicationsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_drug: Optional[shared_patientdrug.PatientDrug] = dataclasses.field(default=None)
    
