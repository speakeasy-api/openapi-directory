import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobiledeviceaccessruleeffect_enum as shared_mobiledeviceaccessruleeffect_enum
from ..shared import mobiledeviceaccessmatchedrule as shared_mobiledeviceaccessmatchedrule


@dataclass_json
@dataclasses.dataclass
class GetMobileDeviceAccessEffectResponse:
    effect: Optional[shared_mobiledeviceaccessruleeffect_enum.MobileDeviceAccessRuleEffectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Effect') }})
    matched_rules: Optional[list[shared_mobiledeviceaccessmatchedrule.MobileDeviceAccessMatchedRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedRules') }})
    
