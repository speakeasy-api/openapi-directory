import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendSmsRequest:
    r"""SendSmsRequest
    Send SMS Request
    """
    
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
