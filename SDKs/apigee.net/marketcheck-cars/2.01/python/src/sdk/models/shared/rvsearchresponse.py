import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rvbaselisting as shared_rvbaselisting


@dataclass_json
@dataclasses.dataclass
class RvSearchResponse:
    r"""RvSearchResponse
    RV search query response
    """
    
    facets: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    listings: Optional[list[shared_rvbaselisting.RvBaseListing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    num_found: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_found') }})
    range_facets: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range_facets') }})
    stats: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
