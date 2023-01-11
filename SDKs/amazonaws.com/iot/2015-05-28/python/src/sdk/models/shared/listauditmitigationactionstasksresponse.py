import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditmitigationactionstaskmetadata as shared_auditmitigationactionstaskmetadata


@dataclass_json
@dataclasses.dataclass
class ListAuditMitigationActionsTasksResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    tasks: Optional[list[shared_auditmitigationactionstaskmetadata.AuditMitigationActionsTaskMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    
