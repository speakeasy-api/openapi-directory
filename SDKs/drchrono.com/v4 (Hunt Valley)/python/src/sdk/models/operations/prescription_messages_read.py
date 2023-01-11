import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import prescriptionmessage as shared_prescriptionmessage


@dataclasses.dataclass
class PrescriptionMessagesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrescriptionMessagesReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    parent_message: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent_message', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PrescriptionMessagesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrescriptionMessagesReadRequest:
    path_params: PrescriptionMessagesReadPathParams = dataclasses.field()
    query_params: PrescriptionMessagesReadQueryParams = dataclasses.field()
    security: PrescriptionMessagesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrescriptionMessagesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    prescription_message: Optional[shared_prescriptionmessage.PrescriptionMessage] = dataclasses.field(default=None)
    
