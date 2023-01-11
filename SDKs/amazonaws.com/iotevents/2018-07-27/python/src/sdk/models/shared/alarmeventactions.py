import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarmaction as shared_alarmaction


@dataclass_json
@dataclasses.dataclass
class AlarmEventActions:
    r"""AlarmEventActions
    Contains information about one or more alarm actions.
    """
    
    alarm_actions: Optional[list[shared_alarmaction.AlarmAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmActions') }})
    
