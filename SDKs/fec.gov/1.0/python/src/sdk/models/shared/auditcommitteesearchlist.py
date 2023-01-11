import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditcommitteesearch as shared_auditcommitteesearch


@dataclass_json
@dataclasses.dataclass
class AuditCommitteeSearchList:
    results: Optional[list[shared_auditcommitteesearch.AuditCommitteeSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
