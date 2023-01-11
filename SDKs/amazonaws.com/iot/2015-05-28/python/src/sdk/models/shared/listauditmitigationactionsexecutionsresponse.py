import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditmitigationactionexecutionmetadata as shared_auditmitigationactionexecutionmetadata


@dataclass_json
@dataclasses.dataclass
class ListAuditMitigationActionsExecutionsResponse:
    actions_executions: Optional[list[shared_auditmitigationactionexecutionmetadata.AuditMitigationActionExecutionMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsExecutions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
