import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipsetsummary as shared_ipsetsummary


@dataclass_json
@dataclasses.dataclass
class ListIPSetsResponse:
    ip_sets: Optional[list[shared_ipsetsummary.IPSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPSets') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
