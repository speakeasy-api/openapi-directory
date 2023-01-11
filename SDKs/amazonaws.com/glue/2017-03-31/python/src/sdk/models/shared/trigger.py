import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action
from ..shared import eventbatchingcondition as shared_eventbatchingcondition
from ..shared import predicate as shared_predicate
from ..shared import triggerstate_enum as shared_triggerstate_enum
from ..shared import triggertype_enum as shared_triggertype_enum


@dataclass_json
@dataclasses.dataclass
class Trigger:
    r"""Trigger
    Information about a specific trigger.
    """
    
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    event_batching_condition: Optional[shared_eventbatchingcondition.EventBatchingCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBatchingCondition') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    predicate: Optional[shared_predicate.Predicate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predicate') }})
    schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    state: Optional[shared_triggerstate_enum.TriggerStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    type: Optional[shared_triggertype_enum.TriggerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    workflow_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowName') }})
    
