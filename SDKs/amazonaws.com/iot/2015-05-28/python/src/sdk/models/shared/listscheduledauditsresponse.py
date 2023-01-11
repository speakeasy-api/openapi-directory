import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduledauditmetadata as shared_scheduledauditmetadata


@dataclass_json
@dataclasses.dataclass
class ListScheduledAuditsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    scheduled_audits: Optional[list[shared_scheduledauditmetadata.ScheduledAuditMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledAudits') }})
    
