import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emaillistresponse as shared_emaillistresponse


@dataclasses.dataclass
class AddEmailListHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddEmailListAddEmailListRequestBody:
    emails: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class AddEmailListRequest:
    headers: AddEmailListHeaders = dataclasses.field()
    request: Optional[AddEmailListAddEmailListRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddEmailListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    email_list_response: Optional[shared_emaillistresponse.EmailListResponse] = dataclasses.field(default=None)
    
