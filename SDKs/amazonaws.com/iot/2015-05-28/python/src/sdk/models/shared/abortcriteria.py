import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import abortaction_enum as shared_abortaction_enum
from ..shared import jobexecutionfailuretype_enum as shared_jobexecutionfailuretype_enum


@dataclass_json
@dataclasses.dataclass
class AbortCriteria:
    r"""AbortCriteria
    The criteria that determine when and how a job abort takes place.
    """
    
    action: shared_abortaction_enum.AbortActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    failure_type: shared_jobexecutionfailuretype_enum.JobExecutionFailureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureType') }})
    min_number_of_executed_things: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNumberOfExecutedThings') }})
    threshold_percentage: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdPercentage') }})
    
