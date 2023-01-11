import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stream as shared_stream


@dataclass_json
@dataclasses.dataclass
class GetStreamResponse:
    stream: Optional[shared_stream.Stream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    
