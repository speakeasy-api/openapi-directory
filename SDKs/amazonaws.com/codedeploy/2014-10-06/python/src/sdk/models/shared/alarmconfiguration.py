import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarm as shared_alarm


@dataclass_json
@dataclasses.dataclass
class AlarmConfiguration:
    r"""AlarmConfiguration
    Information about alarms associated with the deployment group.
    """
    
    alarms: Optional[list[shared_alarm.Alarm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarms') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ignore_poll_alarm_failure: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignorePollAlarmFailure') }})
    
