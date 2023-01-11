import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import charity as shared_charity
from ..shared import pricingsummary as shared_pricingsummary
from ..shared import product as shared_product


@dataclass_json
@dataclasses.dataclass
class ItemDraft:
    r"""ItemDraft
    The type that defines the fields for the listing details.
    """
    
    category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    charity: Optional[shared_charity.Charity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charity') }})
    condition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    pricing_summary: Optional[shared_pricingsummary.PricingSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingSummary') }})
    product: Optional[shared_product.Product] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    
