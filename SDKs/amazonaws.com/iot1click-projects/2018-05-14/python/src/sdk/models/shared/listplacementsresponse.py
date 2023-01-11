import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placementsummary as shared_placementsummary


@dataclass_json
@dataclasses.dataclass
class ListPlacementsResponse:
    placements: list[shared_placementsummary.PlacementSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('placements') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
