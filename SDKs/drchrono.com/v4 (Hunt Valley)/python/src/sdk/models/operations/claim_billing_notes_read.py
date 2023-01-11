import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import claimbillingnotes as shared_claimbillingnotes


@dataclasses.dataclass
class ClaimBillingNotesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClaimBillingNotesReadQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClaimBillingNotesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClaimBillingNotesReadRequest:
    path_params: ClaimBillingNotesReadPathParams = dataclasses.field()
    query_params: ClaimBillingNotesReadQueryParams = dataclasses.field()
    security: ClaimBillingNotesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClaimBillingNotesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    claim_billing_notes: Optional[shared_claimbillingnotes.ClaimBillingNotes] = dataclasses.field(default=None)
    
