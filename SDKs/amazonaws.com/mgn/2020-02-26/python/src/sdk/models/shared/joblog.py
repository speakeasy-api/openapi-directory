import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import joblogevent_enum as shared_joblogevent_enum
from ..shared import joblogeventdata as shared_joblogeventdata


@dataclass_json
@dataclasses.dataclass
class JobLog:
    r"""JobLog
    Job log.
    """
    
    event: Optional[shared_joblogevent_enum.JobLogEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    event_data: Optional[shared_joblogeventdata.JobLogEventData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventData') }})
    log_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDateTime') }})
    
