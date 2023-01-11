import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecutioncancelrequestedcause_enum as shared_workflowexecutioncancelrequestedcause_enum
from ..shared import workflowexecution as shared_workflowexecution


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionCancelRequestedEventAttributes:
    r"""WorkflowExecutionCancelRequestedEventAttributes
    Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
    """
    
    cause: Optional[shared_workflowexecutioncancelrequestedcause_enum.WorkflowExecutionCancelRequestedCauseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    external_initiated_event_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalInitiatedEventId') }})
    external_workflow_execution: Optional[shared_workflowexecution.WorkflowExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalWorkflowExecution') }})
    
