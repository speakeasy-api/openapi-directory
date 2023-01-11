import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FundingStrategy:
    r"""FundingStrategy
    This type defines how the Promoted Listing fee is calculated when fundingModel is set to COST_PER_SALE.
    """
    
    bid_percentage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidPercentage') }})
    funding_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingModel') }})
    
