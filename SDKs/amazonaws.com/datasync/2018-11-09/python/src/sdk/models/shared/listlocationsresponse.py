import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationlistentry as shared_locationlistentry


@dataclass_json
@dataclasses.dataclass
class ListLocationsResponse:
    r"""ListLocationsResponse
    ListLocationsResponse
    """
    
    locations: Optional[list[shared_locationlistentry.LocationListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
