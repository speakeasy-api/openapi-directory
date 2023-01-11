import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branchinfo as shared_branchinfo


@dataclass_json
@dataclasses.dataclass
class DeleteBranchOutput:
    r"""DeleteBranchOutput
    Represents the output of a delete branch operation.
    """
    
    deleted_branch: Optional[shared_branchinfo.BranchInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedBranch') }})
    
