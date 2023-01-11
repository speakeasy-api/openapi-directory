import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import claimbillingnotes as shared_claimbillingnotes


@dataclasses.dataclass
class ClaimBillingNotesListQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClaimBillingNotesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ClaimBillingNotesList200ApplicationJSON:
    r"""ClaimBillingNotesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_claimbillingnotes.ClaimBillingNotes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ClaimBillingNotesListRequest:
    query_params: ClaimBillingNotesListQueryParams = dataclasses.field()
    security: ClaimBillingNotesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClaimBillingNotesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    claim_billing_notes_list_200_application_json_object: Optional[ClaimBillingNotesList200ApplicationJSON] = dataclasses.field(default=None)
    
