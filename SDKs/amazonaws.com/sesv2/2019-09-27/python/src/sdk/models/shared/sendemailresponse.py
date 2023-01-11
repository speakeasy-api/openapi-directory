import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendEmailResponse:
    r"""SendEmailResponse
    A unique message ID that you receive when an email is accepted for sending.
    """
    
    message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageId') }})
    
