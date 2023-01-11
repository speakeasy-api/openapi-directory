import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commit as shared_commit
from ..shared import branch_protection as shared_branch_protection


@dataclass_json
@dataclasses.dataclass
class BranchWithProtectionLinks:
    html: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    self: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class BranchWithProtection:
    r"""BranchWithProtection
    Branch With Protection
    """
    
    links: BranchWithProtectionLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    commit: shared_commit.Commit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protected: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protected') }})
    protection: shared_branch_protection.BranchProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    protection_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_url') }})
    pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    required_approving_review_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    
