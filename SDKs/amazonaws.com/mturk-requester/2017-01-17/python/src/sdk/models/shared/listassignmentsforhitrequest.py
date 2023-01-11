import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignmentstatus_enum as shared_assignmentstatus_enum


@dataclass_json
@dataclasses.dataclass
class ListAssignmentsForHitRequest:
    hit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    assignment_statuses: Optional[list[shared_assignmentstatus_enum.AssignmentStatusEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentStatuses') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
