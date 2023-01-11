import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobexecutionstatus_enum as shared_jobexecutionstatus_enum


@dataclass_json
@dataclasses.dataclass
class JobExecutionState:
    r"""JobExecutionState
    Contains data about the state of a job execution.
    """
    
    status: Optional[shared_jobexecutionstatus_enum.JobExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_details: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusDetails') }})
    version_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    
