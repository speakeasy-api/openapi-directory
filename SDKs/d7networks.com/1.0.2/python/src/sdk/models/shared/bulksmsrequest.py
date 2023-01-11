import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import message as shared_message


@dataclass_json
@dataclasses.dataclass
class BulkSmsRequest:
    r"""BulkSmsRequest
    Bulk SMS Request
    """
    
    messages: list[shared_message.Message] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    
