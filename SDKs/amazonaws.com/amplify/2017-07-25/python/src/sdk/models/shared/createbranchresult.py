import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branch as shared_branch


@dataclass_json
@dataclasses.dataclass
class CreateBranchResult:
    r"""CreateBranchResult
     The result structure for create branch request. 
    """
    
    branch: shared_branch.Branch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    
