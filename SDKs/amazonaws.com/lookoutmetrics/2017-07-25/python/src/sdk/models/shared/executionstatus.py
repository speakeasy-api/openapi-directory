import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import anomalydetectiontaskstatus_enum as shared_anomalydetectiontaskstatus_enum


@dataclass_json
@dataclasses.dataclass
class ExecutionStatus:
    r"""ExecutionStatus
    The status of an anomaly detector run.
    """
    
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    status: Optional[shared_anomalydetectiontaskstatus_enum.AnomalyDetectionTaskStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
