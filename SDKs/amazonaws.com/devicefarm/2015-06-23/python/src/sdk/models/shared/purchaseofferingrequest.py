import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PurchaseOfferingRequest:
    r"""PurchaseOfferingRequest
    Represents a request for a purchase offering.
    """
    
    offering_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    quantity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    offering_promotion_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringPromotionId') }})
    
