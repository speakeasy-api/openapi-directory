import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketingrecommendation as shared_marketingrecommendation


@dataclass_json
@dataclasses.dataclass
class ListingRecommendation:
    r"""ListingRecommendation
    A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
    """
    
    listing_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingId') }})
    marketing: Optional[shared_marketingrecommendation.MarketingRecommendation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketing') }})
    
