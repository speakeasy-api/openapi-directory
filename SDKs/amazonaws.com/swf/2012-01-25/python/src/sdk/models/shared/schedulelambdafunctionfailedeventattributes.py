import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schedulelambdafunctionfailedcause_enum as shared_schedulelambdafunctionfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class ScheduleLambdaFunctionFailedEventAttributes:
    r"""ScheduleLambdaFunctionFailedEventAttributes
    Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
    """
    
    cause: shared_schedulelambdafunctionfailedcause_enum.ScheduleLambdaFunctionFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
