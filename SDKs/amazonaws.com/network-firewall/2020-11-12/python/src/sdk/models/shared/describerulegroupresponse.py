import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulegroup as shared_rulegroup
from ..shared import rulegroupresponse as shared_rulegroupresponse


@dataclass_json
@dataclasses.dataclass
class DescribeRuleGroupResponse:
    rule_group_response: shared_rulegroupresponse.RuleGroupResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupResponse') }})
    update_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    rule_group: Optional[shared_rulegroup.RuleGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroup') }})
    
