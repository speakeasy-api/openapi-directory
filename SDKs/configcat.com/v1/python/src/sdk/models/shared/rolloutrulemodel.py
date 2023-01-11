import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rolloutrulecomparator_enum as shared_rolloutrulecomparator_enum


@dataclass_json
@dataclasses.dataclass
class RolloutRuleModel:
    comparison_attribute: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonAttribute') }})
    comparison_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonValue') }})
    comparator: Optional[shared_rolloutrulecomparator_enum.RolloutRuleComparatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
