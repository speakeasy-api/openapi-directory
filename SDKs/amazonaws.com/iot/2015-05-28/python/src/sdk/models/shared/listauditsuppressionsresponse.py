import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditsuppression as shared_auditsuppression


@dataclass_json
@dataclasses.dataclass
class ListAuditSuppressionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    suppressions: Optional[list[shared_auditsuppression.AuditSuppression]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressions') }})
    
