import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum
from ..shared import fieldnamestring_enum as shared_fieldnamestring_enum


@dataclass_json
@dataclasses.dataclass
class FilterCondition:
    r"""FilterCondition
    This structure describes the filtering of columns in a table based on a filter condition.
    """
    
    comparison_operator: Optional[shared_comparisonoperator_enum.ComparisonOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    field: Optional[shared_fieldnamestring_enum.FieldNameStringEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Field') }})
    string_value_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValueList') }})
    
