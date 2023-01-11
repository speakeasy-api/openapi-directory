import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceattribute_enum as shared_deviceattribute_enum
from ..shared import ruleoperator_enum as shared_ruleoperator_enum


@dataclass_json
@dataclasses.dataclass
class Rule:
    r"""Rule
    Represents a condition for a device pool.
    """
    
    attribute: Optional[shared_deviceattribute_enum.DeviceAttributeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    operator: Optional[shared_ruleoperator_enum.RuleOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
