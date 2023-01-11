import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import robotdeploymentstep_enum as shared_robotdeploymentstep_enum


@dataclass_json
@dataclasses.dataclass
class ProgressDetail:
    r"""ProgressDetail
    Information about the progress of a deployment job.
    """
    
    current_progress: Optional[shared_robotdeploymentstep_enum.RobotDeploymentStepEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentProgress') }})
    estimated_time_remaining_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedTimeRemainingSeconds') }})
    percent_done: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentDone') }})
    target_resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResource') }})
    
