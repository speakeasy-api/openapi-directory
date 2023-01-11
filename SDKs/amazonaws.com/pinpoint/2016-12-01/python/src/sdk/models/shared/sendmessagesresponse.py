import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messageresponse as shared_messageresponse


@dataclass_json
@dataclasses.dataclass
class SendMessagesResponse:
    message_response: shared_messageresponse.MessageResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageResponse') }})
    
