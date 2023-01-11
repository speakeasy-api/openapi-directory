import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import motorcyclebaselisting as shared_motorcyclebaselisting


@dataclass_json
@dataclasses.dataclass
class MotorcycleSearchResponse:
    r"""MotorcycleSearchResponse
    Motorcycle search query response
    """
    
    facets: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    listings: Optional[list[shared_motorcyclebaselisting.MotorcycleBaseListing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    num_found: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_found') }})
    range_facets: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range_facets') }})
    stats: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
