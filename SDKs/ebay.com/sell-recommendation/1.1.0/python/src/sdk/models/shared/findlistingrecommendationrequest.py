import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FindListingRecommendationRequest:
    r"""FindListingRecommendationRequest
    An list of listing ID values for which you want Promoted Listings ad configuration information.
    """
    
    listing_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingIds') }})
    
