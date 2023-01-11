import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import voice as shared_voice


@dataclass_json
@dataclasses.dataclass
class DescribeVoicesOutput:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    voices: Optional[list[shared_voice.Voice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Voices') }})
    
