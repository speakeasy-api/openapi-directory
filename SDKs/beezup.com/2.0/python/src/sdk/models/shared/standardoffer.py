import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offerfunctionality as shared_offerfunctionality
from ..shared import standardofferlinks as shared_standardofferlinks


@dataclass_json
@dataclasses.dataclass
class StandardOffer:
    links: shared_standardofferlinks.StandardOfferLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offer_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    additional_click_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalClickPrice') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    fixed_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPrice') }})
    functionalities: Optional[list[shared_offerfunctionality.OfferFunctionality]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionalities') }})
    included_click: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedClick') }})
    is_most_popular: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMostPopular') }})
    is_old_offer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOldOffer') }})
    position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
