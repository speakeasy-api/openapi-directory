import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import terms as shared_terms


@dataclass_json
@dataclasses.dataclass
class Coupon:
    r"""Coupon
    The details for the coupon available for the item.
    """
    
    redemption_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionCode') }})
    terms: Optional[shared_terms.Terms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
