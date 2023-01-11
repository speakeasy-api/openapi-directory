import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artist as shared_artist
from ..shared import entertainment as shared_entertainment
from ..shared import facetevent as shared_facetevent
from ..shared import location as shared_location
from ..shared import specificpeople as shared_specificpeople


@dataclass_json
@dataclasses.dataclass
class SearchFacetsResponse:
    artists: Optional[list[shared_artist.Artist]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    entertainment: Optional[list[shared_entertainment.Entertainment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entertainment') }})
    events: Optional[list[shared_facetevent.FacetEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    locations: Optional[list[shared_location.Location]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    specific_people: Optional[list[shared_specificpeople.SpecificPeople]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specific_people') }})
    
