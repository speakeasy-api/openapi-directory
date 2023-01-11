import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import teacherresponse as shared_teacherresponse


@dataclass_json
@dataclasses.dataclass
class TeachersResponse:
    data: Optional[list[shared_teacherresponse.TeacherResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
