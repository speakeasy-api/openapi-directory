import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messagetype_enum as shared_messagetype_enum


@dataclass_json
@dataclasses.dataclass
class JourneySmsMessage:
    r"""JourneySmsMessage
    Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
    """
    
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    message_type: Optional[shared_messagetype_enum.MessageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageType') }})
    origination_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginationNumber') }})
    sender_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SenderId') }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateId') }})
    
