import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetXSSMatchSetRequest:
    r"""GetXSSMatchSetRequest
    A request to get an <a>XssMatchSet</a>.
    """
    
    xss_match_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchSetId') }})
    
