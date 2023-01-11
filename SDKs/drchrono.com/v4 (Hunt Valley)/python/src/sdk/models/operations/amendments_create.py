import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientamendment as shared_patientamendment


@dataclasses.dataclass
class AmendmentsCreateQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AmendmentsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AmendmentsCreateRequest:
    query_params: AmendmentsCreateQueryParams = dataclasses.field()
    security: AmendmentsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AmendmentsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_amendment: Optional[shared_patientamendment.PatientAmendment] = dataclasses.field(default=None)
    
