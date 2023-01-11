import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event
from ..shared import badrequestexception as shared_badrequestexception


@dataclasses.dataclass
class PutEventsHeaders:
    x_amz_client_context: str = dataclasses.field(metadata={'header': { 'field_name': 'x-amz-Client-Context', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_client_context_encoding: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-Client-Context-Encoding', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutEventsRequestBody:
    events: list[shared_event.Event] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclasses.dataclass
class PutEventsRequest:
    headers: PutEventsHeaders = dataclasses.field()
    request: PutEventsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[shared_badrequestexception.BadRequestException] = dataclasses.field(default=None)
    
