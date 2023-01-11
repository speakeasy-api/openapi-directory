import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action
from ..shared import eventbatchingcondition as shared_eventbatchingcondition
from ..shared import predicate as shared_predicate


@dataclass_json
@dataclasses.dataclass
class TriggerUpdate:
    r"""TriggerUpdate
    A structure used to provide information used to update a trigger. This object updates the previous trigger definition by overwriting it completely.
    """
    
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    event_batching_condition: Optional[shared_eventbatchingcondition.EventBatchingCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBatchingCondition') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    predicate: Optional[shared_predicate.Predicate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predicate') }})
    schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    
