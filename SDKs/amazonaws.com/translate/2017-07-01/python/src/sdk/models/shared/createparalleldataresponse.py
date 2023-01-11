import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paralleldatastatus_enum as shared_paralleldatastatus_enum


@dataclass_json
@dataclasses.dataclass
class CreateParallelDataResponse:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[shared_paralleldatastatus_enum.ParallelDataStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
