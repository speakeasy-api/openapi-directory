import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ContractClickInfo:
    r"""ContractClickInfo
    Describe the click information related to the offer.
    """
    
    additional_click_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalClickPrice') }})
    click_included: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickIncluded') }})
    initial_offer_click_included: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialOfferClickIncluded') }})
    
