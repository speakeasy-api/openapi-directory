import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitlementunit_enum as shared_entitlementunit_enum


@dataclass_json
@dataclasses.dataclass
class Entitlement:
    r"""Entitlement
    Describes a resource entitled for use with a license.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    unit: shared_entitlementunit_enum.EntitlementUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    allow_check_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowCheckIn') }})
    max_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCount') }})
    overage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overage') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
