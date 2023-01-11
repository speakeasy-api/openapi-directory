import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PatientAmendment:
    amendment_file: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendment_file') }})
    amendment_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendment_name') }})
    doctor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    patient: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
