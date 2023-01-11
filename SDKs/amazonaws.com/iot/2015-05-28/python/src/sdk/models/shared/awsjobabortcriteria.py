import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsjobabortcriteriaabortaction_enum as shared_awsjobabortcriteriaabortaction_enum
from ..shared import awsjobabortcriteriafailuretype_enum as shared_awsjobabortcriteriafailuretype_enum


@dataclass_json
@dataclasses.dataclass
class AwsJobAbortCriteria:
    r"""AwsJobAbortCriteria
    The criteria that determine when and how a job abort takes place.
    """
    
    action: shared_awsjobabortcriteriaabortaction_enum.AwsJobAbortCriteriaAbortActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    failure_type: shared_awsjobabortcriteriafailuretype_enum.AwsJobAbortCriteriaFailureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureType') }})
    min_number_of_executed_things: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNumberOfExecutedThings') }})
    threshold_percentage: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdPercentage') }})
    
