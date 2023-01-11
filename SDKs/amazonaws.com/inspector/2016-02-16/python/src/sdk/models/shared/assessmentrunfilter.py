import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestamprange as shared_timestamprange
from ..shared import durationrange as shared_durationrange
from ..shared import assessmentrunstate_enum as shared_assessmentrunstate_enum


@dataclass_json
@dataclasses.dataclass
class AssessmentRunFilter:
    r"""AssessmentRunFilter
    Used as the request parameter in the <a>ListAssessmentRuns</a> action.
    """
    
    completion_time_range: Optional[shared_timestamprange.TimestampRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTimeRange') }})
    duration_range: Optional[shared_durationrange.DurationRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationRange') }})
    name_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namePattern') }})
    rules_package_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    start_time_range: Optional[shared_timestamprange.TimestampRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeRange') }})
    state_change_time_range: Optional[shared_timestamprange.TimestampRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeTimeRange') }})
    states: Optional[list[shared_assessmentrunstate_enum.AssessmentRunStateEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('states') }})
    
