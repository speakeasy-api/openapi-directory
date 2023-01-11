import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listing as shared_listing


@dataclass_json
@dataclasses.dataclass
class ListingRespPaginated:
    listings: list[shared_listing.Listing] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    max_pages: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPages') }})
    page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
