import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exporttaskstatuscode_enum as shared_exporttaskstatuscode_enum


@dataclass_json
@dataclasses.dataclass
class ExportTaskStatus:
    r"""ExportTaskStatus
    Represents the status of an export task.
    """
    
    code: Optional[shared_exporttaskstatuscode_enum.ExportTaskStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
