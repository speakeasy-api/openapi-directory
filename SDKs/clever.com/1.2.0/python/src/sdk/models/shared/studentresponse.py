import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import student as shared_student


@dataclass_json
@dataclasses.dataclass
class StudentResponse:
    data: Optional[shared_student.Student] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
