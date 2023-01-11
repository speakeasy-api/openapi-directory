import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customeraction as shared_customeraction
from ..shared import ruleevaluation as shared_ruleevaluation
from ..shared import alarmstatename_enum as shared_alarmstatename_enum
from ..shared import systemevent as shared_systemevent


@dataclass_json
@dataclasses.dataclass
class AlarmState:
    r"""AlarmState
    Contains information about the current state of the alarm.
    """
    
    customer_action: Optional[shared_customeraction.CustomerAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAction') }})
    rule_evaluation: Optional[shared_ruleevaluation.RuleEvaluation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleEvaluation') }})
    state_name: Optional[shared_alarmstatename_enum.AlarmStateNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateName') }})
    system_event: Optional[shared_systemevent.SystemEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemEvent') }})
    
