import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wafaction as shared_wafaction
from ..shared import webaclupdate as shared_webaclupdate


@dataclass_json
@dataclasses.dataclass
class UpdateWebACLRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    web_acl_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebACLId') }})
    default_action: Optional[shared_wafaction.WafAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultAction') }})
    updates: Optional[list[shared_webaclupdate.WebACLUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
