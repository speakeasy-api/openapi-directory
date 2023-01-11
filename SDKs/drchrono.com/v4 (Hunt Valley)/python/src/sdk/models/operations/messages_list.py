import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import doctormessage as shared_doctormessage


@dataclasses.dataclass
class MessagesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    owner: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'owner', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    received_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'received_since', 'style': 'form', 'explode': True }})
    responsible_user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'responsible_user', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    updated_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updated_since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MessagesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class MessagesList200ApplicationJSON:
    r"""MessagesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_doctormessage.DoctorMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class MessagesListRequest:
    query_params: MessagesListQueryParams = dataclasses.field()
    security: MessagesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MessagesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messages_list_200_application_json_object: Optional[MessagesList200ApplicationJSON] = dataclasses.field(default=None)
    
