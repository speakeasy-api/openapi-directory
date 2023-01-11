import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceplatform_enum as shared_deviceplatform_enum
from ..shared import recurringcharge as shared_recurringcharge
from ..shared import offeringtype_enum as shared_offeringtype_enum


@dataclass_json
@dataclasses.dataclass
class Offering:
    r"""Offering
    Represents the metadata of a device offering.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    platform: Optional[shared_deviceplatform_enum.DevicePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    recurring_charges: Optional[list[shared_recurringcharge.RecurringCharge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringCharges') }})
    type: Optional[shared_offeringtype_enum.OfferingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
