import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emaillistresponse as shared_emaillistresponse


@dataclasses.dataclass
class UpdateEmailListByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEmailListByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateEmailListByIDUpdateEmailListRequestBody:
    emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateEmailListByIDRequest:
    headers: UpdateEmailListByIDHeaders = dataclasses.field()
    path_params: UpdateEmailListByIDPathParams = dataclasses.field()
    request: Optional[UpdateEmailListByIDUpdateEmailListRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateEmailListByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    email_list_response: Optional[shared_emaillistresponse.EmailListResponse] = dataclasses.field(default=None)
    
