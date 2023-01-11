import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteXSSMatchSetRequest:
    r"""DeleteXSSMatchSetRequest
    A request to delete an <a>XssMatchSet</a> from AWS WAF.
    """
    
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    xss_match_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchSetId') }})
    
