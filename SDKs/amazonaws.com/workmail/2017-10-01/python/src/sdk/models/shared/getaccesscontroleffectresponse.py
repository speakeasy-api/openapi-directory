import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesscontrolruleeffect_enum as shared_accesscontrolruleeffect_enum


@dataclass_json
@dataclasses.dataclass
class GetAccessControlEffectResponse:
    effect: Optional[shared_accesscontrolruleeffect_enum.AccessControlRuleEffectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Effect') }})
    matched_rules: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedRules') }})
    
