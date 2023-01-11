import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listingrecommendation as shared_listingrecommendation


@dataclass_json
@dataclasses.dataclass
class PagedListingRecommendationCollection:
    r"""PagedListingRecommendationCollection
    The high-level object used to return a set of Promoted Listings ad recommendations.
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    listing_recommendations: Optional[list[shared_listingrecommendation.ListingRecommendation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingRecommendations') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
