import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rule as shared_rule


@dataclass_json
@dataclasses.dataclass
class GetRuleResponse:
    rule: Optional[shared_rule.Rule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rule') }})
    
