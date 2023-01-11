import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bytematchset as shared_bytematchset


@dataclass_json
@dataclasses.dataclass
class GetByteMatchSetResponse:
    byte_match_set: Optional[shared_bytematchset.ByteMatchSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ByteMatchSet') }})
    
