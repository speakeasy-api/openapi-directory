import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class MarketingPrice:
    r"""MarketingPrice
    A type that describes the seller discount.
    """
    
    discount_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    discount_percentage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountPercentage') }})
    original_price: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalPrice') }})
    price_treatment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceTreatment') }})
    
