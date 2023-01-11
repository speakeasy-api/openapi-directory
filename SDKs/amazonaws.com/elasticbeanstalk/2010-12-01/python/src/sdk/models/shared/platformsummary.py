import dataclasses
from typing import Optional
from enum import Enum
from ..shared import platformstatus_enum as shared_platformstatus_enum


@dataclasses.dataclass
class PlatformSummary:
    r"""PlatformSummary
    Summary information about a platform version.
    """
    
    operating_system_name: Optional[str] = dataclasses.field(default=None)
    operating_system_version: Optional[str] = dataclasses.field(default=None)
    platform_arn: Optional[str] = dataclasses.field(default=None)
    platform_branch_lifecycle_state: Optional[str] = dataclasses.field(default=None)
    platform_branch_name: Optional[str] = dataclasses.field(default=None)
    platform_category: Optional[str] = dataclasses.field(default=None)
    platform_lifecycle_state: Optional[str] = dataclasses.field(default=None)
    platform_owner: Optional[str] = dataclasses.field(default=None)
    platform_status: Optional[shared_platformstatus_enum.PlatformStatusEnum] = dataclasses.field(default=None)
    platform_version: Optional[str] = dataclasses.field(default=None)
    supported_addon_list: Optional[list[str]] = dataclasses.field(default=None)
    supported_tier_list: Optional[list[str]] = dataclasses.field(default=None)
    
