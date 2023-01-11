import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientflagtype as shared_patientflagtype


@dataclasses.dataclass
class PatientFlagTypesCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientFlagTypesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientFlagTypesCreateRequest:
    query_params: PatientFlagTypesCreateQueryParams = dataclasses.field()
    security: PatientFlagTypesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientFlagTypesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_flag_type: Optional[shared_patientflagtype.PatientFlagType] = dataclasses.field(default=None)
    
