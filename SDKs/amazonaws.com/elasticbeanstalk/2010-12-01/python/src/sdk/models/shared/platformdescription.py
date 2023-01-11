import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import customami as shared_customami
from ..shared import platformframework as shared_platformframework
from ..shared import platformstatus_enum as shared_platformstatus_enum
from ..shared import platformprogramminglanguage as shared_platformprogramminglanguage


@dataclasses.dataclass
class PlatformDescription:
    r"""PlatformDescription
    Detailed information about a platform version.
    """
    
    custom_ami_list: Optional[list[shared_customami.CustomAmi]] = dataclasses.field(default=None)
    date_created: Optional[datetime] = dataclasses.field(default=None)
    date_updated: Optional[datetime] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    frameworks: Optional[list[shared_platformframework.PlatformFramework]] = dataclasses.field(default=None)
    maintainer: Optional[str] = dataclasses.field(default=None)
    operating_system_name: Optional[str] = dataclasses.field(default=None)
    operating_system_version: Optional[str] = dataclasses.field(default=None)
    platform_arn: Optional[str] = dataclasses.field(default=None)
    platform_branch_lifecycle_state: Optional[str] = dataclasses.field(default=None)
    platform_branch_name: Optional[str] = dataclasses.field(default=None)
    platform_category: Optional[str] = dataclasses.field(default=None)
    platform_lifecycle_state: Optional[str] = dataclasses.field(default=None)
    platform_name: Optional[str] = dataclasses.field(default=None)
    platform_owner: Optional[str] = dataclasses.field(default=None)
    platform_status: Optional[shared_platformstatus_enum.PlatformStatusEnum] = dataclasses.field(default=None)
    platform_version: Optional[str] = dataclasses.field(default=None)
    programming_languages: Optional[list[shared_platformprogramminglanguage.PlatformProgrammingLanguage]] = dataclasses.field(default=None)
    solution_stack_name: Optional[str] = dataclasses.field(default=None)
    supported_addon_list: Optional[list[str]] = dataclasses.field(default=None)
    supported_tier_list: Optional[list[str]] = dataclasses.field(default=None)
    
