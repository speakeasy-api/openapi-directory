import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientmessage as shared_patientmessage


@dataclasses.dataclass
class PatientMessagesCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientMessagesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientMessagesCreateRequest:
    query_params: PatientMessagesCreateQueryParams = dataclasses.field()
    security: PatientMessagesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientMessagesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_message: Optional[shared_patientmessage.PatientMessage] = dataclasses.field(default=None)
    
