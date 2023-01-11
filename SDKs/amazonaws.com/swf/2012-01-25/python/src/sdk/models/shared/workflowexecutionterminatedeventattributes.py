import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecutionterminatedcause_enum as shared_workflowexecutionterminatedcause_enum
from ..shared import childpolicy_enum as shared_childpolicy_enum


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionTerminatedEventAttributes:
    r"""WorkflowExecutionTerminatedEventAttributes
    Provides the details of the <code>WorkflowExecutionTerminated</code> event.
    """
    
    child_policy: shared_childpolicy_enum.ChildPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    cause: Optional[shared_workflowexecutionterminatedcause_enum.WorkflowExecutionTerminatedCauseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
