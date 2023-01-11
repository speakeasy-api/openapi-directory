import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientallergy as shared_patientallergy


@dataclasses.dataclass
class AllergiesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AllergiesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AllergiesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AllergiesReadRequest:
    path_params: AllergiesReadPathParams = dataclasses.field()
    query_params: AllergiesReadQueryParams = dataclasses.field()
    security: AllergiesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AllergiesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_allergy: Optional[shared_patientallergy.PatientAllergy] = dataclasses.field(default=None)
    
