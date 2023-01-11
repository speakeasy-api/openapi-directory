import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import childpolicy_enum as shared_childpolicy_enum
from ..shared import workflowexecutiontimeouttype_enum as shared_workflowexecutiontimeouttype_enum


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionTimedOutEventAttributes:
    r"""WorkflowExecutionTimedOutEventAttributes
    Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
    """
    
    child_policy: shared_childpolicy_enum.ChildPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    timeout_type: shared_workflowexecutiontimeouttype_enum.WorkflowExecutionTimeoutTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    
