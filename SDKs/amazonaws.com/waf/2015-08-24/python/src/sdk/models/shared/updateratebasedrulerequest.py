import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruleupdate as shared_ruleupdate


@dataclass_json
@dataclasses.dataclass
class UpdateRateBasedRuleRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    rate_limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateLimit') }})
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    updates: list[shared_ruleupdate.RuleUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
