import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listedworkflow as shared_listedworkflow


@dataclass_json
@dataclasses.dataclass
class ListWorkflowsResponse:
    workflows: list[shared_listedworkflow.ListedWorkflow] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workflows') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
