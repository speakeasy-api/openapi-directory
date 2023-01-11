import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipsetupdate as shared_ipsetupdate


@dataclass_json
@dataclasses.dataclass
class UpdateIPSetRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    ip_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IPSetId') }})
    updates: list[shared_ipsetupdate.IPSetUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
