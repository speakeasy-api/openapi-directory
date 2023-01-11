import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetsummary as shared_fleetsummary


@dataclass_json
@dataclasses.dataclass
class ListFleetsResponse:
    fleet_summary_list: Optional[list[shared_fleetsummary.FleetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
