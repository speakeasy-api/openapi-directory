import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accelerator as shared_accelerator


@dataclass_json
@dataclasses.dataclass
class ListAcceleratorsResponse:
    accelerators: Optional[list[shared_accelerator.Accelerator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accelerators') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
