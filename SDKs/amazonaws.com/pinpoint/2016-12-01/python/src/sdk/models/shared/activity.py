import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import custommessageactivity as shared_custommessageactivity
from ..shared import conditionalsplitactivity as shared_conditionalsplitactivity
from ..shared import emailmessageactivity as shared_emailmessageactivity
from ..shared import holdoutactivity as shared_holdoutactivity
from ..shared import multiconditionalsplitactivity as shared_multiconditionalsplitactivity
from ..shared import pushmessageactivity as shared_pushmessageactivity
from ..shared import randomsplitactivity as shared_randomsplitactivity
from ..shared import smsmessageactivity as shared_smsmessageactivity
from ..shared import waitactivity as shared_waitactivity


@dataclass_json
@dataclasses.dataclass
class Activity:
    custom: Optional[shared_custommessageactivity.CustomMessageActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CUSTOM') }})
    conditional_split: Optional[shared_conditionalsplitactivity.ConditionalSplitActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalSplit') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    email: Optional[shared_emailmessageactivity.EmailMessageActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EMAIL') }})
    holdout: Optional[shared_holdoutactivity.HoldoutActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Holdout') }})
    multi_condition: Optional[shared_multiconditionalsplitactivity.MultiConditionalSplitActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiCondition') }})
    push: Optional[shared_pushmessageactivity.PushMessageActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PUSH') }})
    random_split: Optional[shared_randomsplitactivity.RandomSplitActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RandomSplit') }})
    sms: Optional[shared_smsmessageactivity.SmsMessageActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMS') }})
    wait: Optional[shared_waitactivity.WaitActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wait') }})
    
