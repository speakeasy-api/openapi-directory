import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notifyworkersfailurecode_enum as shared_notifyworkersfailurecode_enum


@dataclass_json
@dataclasses.dataclass
class NotifyWorkersFailureStatus:
    r"""NotifyWorkersFailureStatus
     When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. 
    """
    
    notify_workers_failure_code: Optional[shared_notifyworkersfailurecode_enum.NotifyWorkersFailureCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotifyWorkersFailureCode') }})
    notify_workers_failure_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotifyWorkersFailureMessage') }})
    worker_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerId') }})
    
