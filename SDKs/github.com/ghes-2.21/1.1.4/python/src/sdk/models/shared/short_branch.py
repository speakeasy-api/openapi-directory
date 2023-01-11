import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branch_protection as shared_branch_protection


@dataclass_json
@dataclasses.dataclass
class ShortBranchCommit:
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ShortBranch:
    r"""ShortBranch
    Short Branch
    """
    
    commit: ShortBranchCommit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protected: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protected') }})
    protection: Optional[shared_branch_protection.BranchProtection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    protection_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_url') }})
    
