import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notifyworkersfailurestatus as shared_notifyworkersfailurestatus


@dataclass_json
@dataclasses.dataclass
class NotifyWorkersResponse:
    notify_workers_failure_statuses: Optional[list[shared_notifyworkersfailurestatus.NotifyWorkersFailureStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotifyWorkersFailureStatuses') }})
    
