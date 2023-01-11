import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branch as shared_branch


@dataclass_json
@dataclasses.dataclass
class ListBranchesResult:
    r"""ListBranchesResult
     The result structure for the list branches request. 
    """
    
    branches: list[shared_branch.Branch] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
