import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class As2Transport:
    r"""As2Transport
    Describes a single AS2 connection in all of it variations
    """
    
    receiver_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverId') }})
    receiver_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverUrl') }})
    sender_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('senderId') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    content_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDescription') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    sender_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senderEmail') }})
    
