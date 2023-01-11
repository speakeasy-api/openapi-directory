import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientdrug as shared_patientdrug


@dataclasses.dataclass
class MedicationsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MedicationsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MedicationsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MedicationsReadRequest:
    path_params: MedicationsReadPathParams = dataclasses.field()
    query_params: MedicationsReadQueryParams = dataclasses.field()
    security: MedicationsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MedicationsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_drug: Optional[shared_patientdrug.PatientDrug] = dataclasses.field(default=None)
    
