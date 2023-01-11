import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualification as shared_qualification


@dataclass_json
@dataclasses.dataclass
class ListWorkersWithQualificationTypeResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumResults') }})
    qualifications: Optional[list[shared_qualification.Qualification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Qualifications') }})
    
