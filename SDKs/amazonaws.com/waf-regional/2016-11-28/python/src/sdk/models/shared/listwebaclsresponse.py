import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webaclsummary as shared_webaclsummary


@dataclass_json
@dataclasses.dataclass
class ListWebAcLsResponse:
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    web_ac_ls: Optional[list[shared_webaclsummary.WebACLSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebACLs') }})
    
