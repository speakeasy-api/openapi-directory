import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import school as shared_school


@dataclass_json
@dataclasses.dataclass
class SchoolResponse:
    data: Optional[shared_school.School] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
