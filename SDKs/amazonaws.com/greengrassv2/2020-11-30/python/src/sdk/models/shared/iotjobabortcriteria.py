import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iotjobabortaction_enum as shared_iotjobabortaction_enum
from ..shared import iotjobexecutionfailuretype_enum as shared_iotjobexecutionfailuretype_enum


@dataclass_json
@dataclasses.dataclass
class IoTJobAbortCriteria:
    r"""IoTJobAbortCriteria
    <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>
    """
    
    action: shared_iotjobabortaction_enum.IoTJobAbortActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    failure_type: shared_iotjobexecutionfailuretype_enum.IoTJobExecutionFailureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureType') }})
    min_number_of_executed_things: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNumberOfExecutedThings') }})
    threshold_percentage: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdPercentage') }})
    
