import dataclasses
from typing import Optional
from ..shared import platformbranchsummary as shared_platformbranchsummary


@dataclasses.dataclass
class ListPlatformBranchesResult:
    next_token: Optional[str] = dataclasses.field(default=None)
    platform_branch_summary_list: Optional[list[shared_platformbranchsummary.PlatformBranchSummary]] = dataclasses.field(default=None)
    
