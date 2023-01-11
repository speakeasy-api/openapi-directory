import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offeringpromotion as shared_offeringpromotion


@dataclass_json
@dataclasses.dataclass
class ListOfferingPromotionsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    offering_promotions: Optional[list[shared_offeringpromotion.OfferingPromotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringPromotions') }})
    
