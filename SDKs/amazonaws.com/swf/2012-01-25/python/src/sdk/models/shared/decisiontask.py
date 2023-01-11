import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import historyevent as shared_historyevent
from ..shared import workflowexecution as shared_workflowexecution
from ..shared import workflowtype as shared_workflowtype


@dataclass_json
@dataclasses.dataclass
class DecisionTask:
    r"""DecisionTask
    A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
    """
    
    events: list[shared_historyevent.HistoryEvent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    task_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskToken') }})
    workflow_execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    workflow_type: shared_workflowtype.WorkflowType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    previous_started_event_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousStartedEventId') }})
    
