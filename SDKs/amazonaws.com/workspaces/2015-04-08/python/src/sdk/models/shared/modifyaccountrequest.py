import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dedicatedtenancysupportenum_enum as shared_dedicatedtenancysupportenum_enum


@dataclass_json
@dataclasses.dataclass
class ModifyAccountRequest:
    dedicated_tenancy_management_cidr_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedTenancyManagementCidrRange') }})
    dedicated_tenancy_support: Optional[shared_dedicatedtenancysupportenum_enum.DedicatedTenancySupportEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedTenancySupport') }})
    
