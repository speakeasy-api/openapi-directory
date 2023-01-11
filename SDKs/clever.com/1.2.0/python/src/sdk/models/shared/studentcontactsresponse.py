import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import studentcontactresponse as shared_studentcontactresponse


@dataclass_json
@dataclasses.dataclass
class StudentContactsResponse:
    data: Optional[list[shared_studentcontactresponse.StudentContactResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
