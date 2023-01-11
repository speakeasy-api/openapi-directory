import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import failedscheduledupdategroupactionrequest as shared_failedscheduledupdategroupactionrequest


@dataclasses.dataclass
class BatchDeleteScheduledActionAnswer:
    failed_scheduled_actions: Optional[list[shared_failedscheduledupdategroupactionrequest.FailedScheduledUpdateGroupActionRequest]] = dataclasses.field(default=None)
    
