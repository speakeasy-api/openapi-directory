import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recipientdetail as shared_recipientdetail


@dataclass_json
@dataclasses.dataclass
class SmsConfiguration:
    r"""SmsConfiguration
    Contains the configuration information of SMS notifications.
    """
    
    recipients: list[shared_recipientdetail.RecipientDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    additional_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalMessage') }})
    sender_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senderId') }})
    
