import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import xssmatchsetsummary as shared_xssmatchsetsummary


@dataclass_json
@dataclasses.dataclass
class ListXSSMatchSetsResponse:
    r"""ListXSSMatchSetsResponse
    The response to a <a>ListXssMatchSets</a> request.
    """
    
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    xss_match_sets: Optional[list[shared_xssmatchsetsummary.XSSMatchSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchSets') }})
    
