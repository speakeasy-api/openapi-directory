import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum


@dataclass_json
@dataclasses.dataclass
class SimpleRule:
    r"""SimpleRule
    A rule that compares an input property value to a threshold value with a comparison operator.
    """
    
    comparison_operator: shared_comparisonoperator_enum.ComparisonOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonOperator') }})
    input_property: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputProperty') }})
    threshold: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    
