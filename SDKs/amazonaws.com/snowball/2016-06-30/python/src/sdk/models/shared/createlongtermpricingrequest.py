import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import longtermpricingtype_enum as shared_longtermpricingtype_enum
from ..shared import snowballtype_enum as shared_snowballtype_enum


@dataclass_json
@dataclasses.dataclass
class CreateLongTermPricingRequest:
    long_term_pricing_type: shared_longtermpricingtype_enum.LongTermPricingTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingType') }})
    is_long_term_pricing_auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLongTermPricingAutoRenew') }})
    snowball_type: Optional[shared_snowballtype_enum.SnowballTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    
