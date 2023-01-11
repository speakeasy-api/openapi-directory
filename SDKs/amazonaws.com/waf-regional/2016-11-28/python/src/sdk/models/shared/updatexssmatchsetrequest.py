import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import xssmatchsetupdate as shared_xssmatchsetupdate


@dataclass_json
@dataclasses.dataclass
class UpdateXSSMatchSetRequest:
    r"""UpdateXSSMatchSetRequest
    A request to update an <a>XssMatchSet</a>.
    """
    
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    updates: list[shared_xssmatchsetupdate.XSSMatchSetUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    xss_match_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XssMatchSetId') }})
    
