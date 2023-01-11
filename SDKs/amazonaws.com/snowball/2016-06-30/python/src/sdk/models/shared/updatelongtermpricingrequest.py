import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateLongTermPricingRequest:
    long_term_pricing_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingId') }})
    is_long_term_pricing_auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLongTermPricingAutoRenew') }})
    replacement_job: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementJob') }})
    
