import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationfilter as shared_locationfilter


@dataclass_json
@dataclasses.dataclass
class ListLocationsRequest:
    r"""ListLocationsRequest
    ListLocationsRequest
    """
    
    filters: Optional[list[shared_locationfilter.LocationFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
