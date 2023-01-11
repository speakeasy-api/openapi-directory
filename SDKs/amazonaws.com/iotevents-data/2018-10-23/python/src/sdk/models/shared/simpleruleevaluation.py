import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum


@dataclass_json
@dataclasses.dataclass
class SimpleRuleEvaluation:
    r"""SimpleRuleEvaluation
    Information needed to compare two values with a comparison operator.
    """
    
    input_property_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputPropertyValue') }})
    operator: Optional[shared_comparisonoperator_enum.ComparisonOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    threshold_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdValue') }})
    
