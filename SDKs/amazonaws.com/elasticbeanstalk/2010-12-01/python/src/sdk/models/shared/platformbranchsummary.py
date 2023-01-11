import dataclasses
from typing import Optional


@dataclasses.dataclass
class PlatformBranchSummary:
    r"""PlatformBranchSummary
    Summary information about a platform branch.
    """
    
    branch_name: Optional[str] = dataclasses.field(default=None)
    branch_order: Optional[int] = dataclasses.field(default=None)
    lifecycle_state: Optional[str] = dataclasses.field(default=None)
    platform_name: Optional[str] = dataclasses.field(default=None)
    supported_tier_list: Optional[list[str]] = dataclasses.field(default=None)
    
