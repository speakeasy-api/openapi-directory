import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectmitigationactionstasksummary as shared_detectmitigationactionstasksummary


@dataclass_json
@dataclasses.dataclass
class DescribeDetectMitigationActionsTaskResponse:
    task_summary: Optional[shared_detectmitigationactionstasksummary.DetectMitigationActionsTaskSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSummary') }})
    
