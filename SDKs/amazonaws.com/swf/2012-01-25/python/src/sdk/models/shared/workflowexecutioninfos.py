import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecutioninfo as shared_workflowexecutioninfo


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionInfos:
    r"""WorkflowExecutionInfos
    Contains a paginated list of information about workflow executions.
    """
    
    execution_infos: list[shared_workflowexecutioninfo.WorkflowExecutionInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionInfos') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
