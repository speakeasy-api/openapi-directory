import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operator_enum as shared_operator_enum


@dataclass_json
@dataclasses.dataclass
class FieldTypeDetails:
    r"""FieldTypeDetails
     Contains details regarding the supported field type and the operators that can be applied for filtering. 
    """
    
    field_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldType') }})
    filter_operators: list[shared_operator_enum.OperatorEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterOperators') }})
    supported_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedValues') }})
    
