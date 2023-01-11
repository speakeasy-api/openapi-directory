import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvalresult as shared_approvalresult


@dataclass_json
@dataclasses.dataclass
class PutApprovalResultInput:
    r"""PutApprovalResultInput
    Represents the input of a <code>PutApprovalResult</code> action.
    """
    
    action_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    pipeline_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    result: shared_approvalresult.ApprovalResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    stage_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
