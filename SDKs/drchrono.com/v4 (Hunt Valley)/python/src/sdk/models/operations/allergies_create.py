import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientallergy as shared_patientallergy


@dataclasses.dataclass
class AllergiesCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AllergiesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AllergiesCreateRequest:
    query_params: AllergiesCreateQueryParams = dataclasses.field()
    security: AllergiesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AllergiesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_allergy: Optional[shared_patientallergy.PatientAllergy] = dataclasses.field(default=None)
    
