import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dedicatedtenancysupportresultenum_enum as shared_dedicatedtenancysupportresultenum_enum


@dataclass_json
@dataclasses.dataclass
class DescribeAccountResult:
    dedicated_tenancy_management_cidr_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedTenancyManagementCidrRange') }})
    dedicated_tenancy_support: Optional[shared_dedicatedtenancysupportresultenum_enum.DedicatedTenancySupportResultEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedTenancySupport') }})
    
