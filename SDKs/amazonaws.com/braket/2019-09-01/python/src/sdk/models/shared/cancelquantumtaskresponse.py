import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cancellationstatus_enum as shared_cancellationstatus_enum


@dataclass_json
@dataclasses.dataclass
class CancelQuantumTaskResponse:
    cancellation_status: shared_cancellationstatus_enum.CancellationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationStatus') }})
    quantum_task_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantumTaskArn') }})
    
