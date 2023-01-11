import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operatortype_enum as shared_operatortype_enum


@dataclass_json
@dataclasses.dataclass
class Operator:
    r"""Operator
    Contains a logical operation for comparing the value of a field with a specified value.
    """
    
    type: Optional[shared_operatortype_enum.OperatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
