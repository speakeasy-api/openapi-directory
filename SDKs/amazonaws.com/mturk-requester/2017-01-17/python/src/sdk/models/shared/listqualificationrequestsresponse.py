import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualificationrequest as shared_qualificationrequest


@dataclass_json
@dataclasses.dataclass
class ListQualificationRequestsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumResults') }})
    qualification_requests: Optional[list[shared_qualificationrequest.QualificationRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationRequests') }})
    
