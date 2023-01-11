import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AuditMitigationActionsTaskTarget:
    r"""AuditMitigationActionsTaskTarget
    Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
    """
    
    audit_check_to_reason_code_filter: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckToReasonCodeFilter') }})
    audit_task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditTaskId') }})
    finding_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingIds') }})
    
