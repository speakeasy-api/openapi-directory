import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branch as shared_branch


@dataclass_json
@dataclasses.dataclass
class DeleteBranchResult:
    r"""DeleteBranchResult
     The result structure for the delete branch request. 
    """
    
    branch: shared_branch.Branch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    
