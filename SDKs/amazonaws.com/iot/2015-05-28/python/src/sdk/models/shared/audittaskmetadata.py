import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audittaskstatus_enum as shared_audittaskstatus_enum
from ..shared import audittasktype_enum as shared_audittasktype_enum


@dataclass_json
@dataclasses.dataclass
class AuditTaskMetadata:
    r"""AuditTaskMetadata
    The audits that were performed.
    """
    
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_status: Optional[shared_audittaskstatus_enum.AuditTaskStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    task_type: Optional[shared_audittasktype_enum.AuditTaskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    
