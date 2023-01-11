import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import field as shared_field


@dataclass_json
@dataclasses.dataclass
class ReportTaskProgressInput:
    r"""ReportTaskProgressInput
    Contains the parameters for ReportTaskProgress.
    """
    
    task_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
