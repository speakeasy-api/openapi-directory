import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SearchPlaceIndexForPositionSummary:
    r"""SearchPlaceIndexForPositionSummary
    A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.
    """
    
    data_source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    position: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Position') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    
