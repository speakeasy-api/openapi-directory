import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientamendment as shared_patientamendment


@dataclasses.dataclass
class AmendmentsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AmendmentsReadQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AmendmentsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AmendmentsReadRequest:
    path_params: AmendmentsReadPathParams = dataclasses.field()
    query_params: AmendmentsReadQueryParams = dataclasses.field()
    security: AmendmentsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AmendmentsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_amendment: Optional[shared_patientamendment.PatientAmendment] = dataclasses.field(default=None)
    
