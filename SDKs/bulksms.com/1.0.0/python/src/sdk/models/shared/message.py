import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MessageEncodingEnum(str, Enum):
    TEXT = "TEXT"
    UNICODE = "UNICODE"
    BINARY = "BINARY"

class MessageStatusSubtypeEnum(str, Enum):
    EXPIRED = "EXPIRED"
    HANDSET_ERROR = "HANDSET_ERROR"
    BLOCKED = "BLOCKED"
    NOT_SENT = "NOT_SENT"

class MessageStatusTypeEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    SCHEDULED = "SCHEDULED"
    SENT = "SENT"
    DELIVERED = "DELIVERED"
    UNKNOWN = "UNKNOWN"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class MessageStatus:
    r"""MessageStatus
    The status of the message
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: MessageStatusTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    subtype: Optional[MessageStatusSubtypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    

@dataclass_json
@dataclasses.dataclass
class MessageSubmission:
    r"""MessageSubmission
    Identifies the submission.
    
    """
    
    date_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class MessageTypeEnum(str, Enum):
    SENT = "SENT"
    RECEIVED = "RECEIVED"


@dataclass_json
@dataclasses.dataclass
class Message:
    body: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: MessageStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    type: MessageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    credit_cost: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditCost') }})
    encoding: Optional[MessageEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    message_class: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageClass') }})
    number_of_parts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfParts') }})
    protocol_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocolId') }})
    related_sent_message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedSentMessageId') }})
    submission: Optional[MessageSubmission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission') }})
    user_supplied_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSuppliedId') }})
    
