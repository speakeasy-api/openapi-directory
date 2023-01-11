import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import prescriptionmessage as shared_prescriptionmessage


@dataclasses.dataclass
class PrescriptionMessagesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    parent_message: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent_message', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PrescriptionMessagesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PrescriptionMessagesList200ApplicationJSON:
    r"""PrescriptionMessagesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_prescriptionmessage.PrescriptionMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PrescriptionMessagesListRequest:
    query_params: PrescriptionMessagesListQueryParams = dataclasses.field()
    security: PrescriptionMessagesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrescriptionMessagesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    prescription_messages_list_200_application_json_object: Optional[PrescriptionMessagesList200ApplicationJSON] = dataclasses.field(default=None)
    
