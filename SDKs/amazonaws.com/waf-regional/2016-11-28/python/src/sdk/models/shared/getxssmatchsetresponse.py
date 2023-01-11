import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import xssmatchset as shared_xssmatchset


@dataclass_json
@dataclasses.dataclass
class GetXSSMatchSetResponse:
    r"""GetXSSMatchSetResponse
    The response to a <a>GetXssMatchSet</a> request.
    """
    
    xss_match_set: Optional[shared_xssmatchset.XSSMatchSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchSet') }})
    
