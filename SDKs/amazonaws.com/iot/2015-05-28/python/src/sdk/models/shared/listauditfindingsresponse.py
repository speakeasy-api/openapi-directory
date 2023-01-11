import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditfinding as shared_auditfinding


@dataclass_json
@dataclasses.dataclass
class ListAuditFindingsResponse:
    findings: Optional[list[shared_auditfinding.AuditFinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
