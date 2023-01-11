import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulegroupupdate as shared_rulegroupupdate


@dataclass_json
@dataclasses.dataclass
class UpdateRuleGroupRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    rule_group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupId') }})
    updates: list[shared_rulegroupupdate.RuleGroupUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
