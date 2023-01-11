import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import failedscheduledupdategroupactionrequest as shared_failedscheduledupdategroupactionrequest


@dataclasses.dataclass
class BatchPutScheduledUpdateGroupActionAnswer:
    failed_scheduled_update_group_actions: Optional[list[shared_failedscheduledupdategroupactionrequest.FailedScheduledUpdateGroupActionRequest]] = dataclasses.field(default=None)
    
