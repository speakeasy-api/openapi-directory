import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipruleitem as shared_ipruleitem


@dataclass_json
@dataclasses.dataclass
class UpdateRulesOfIPGroupRequest:
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    user_rules: list[shared_ipruleitem.IPRuleItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserRules') }})
    
