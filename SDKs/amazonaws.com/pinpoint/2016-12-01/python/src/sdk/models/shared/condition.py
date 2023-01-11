import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simplecondition as shared_simplecondition
from ..shared import operator_enum as shared_operator_enum


@dataclass_json
@dataclasses.dataclass
class Condition:
    r"""Condition
    Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
    """
    
    conditions: Optional[list[shared_simplecondition.SimpleCondition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conditions') }})
    operator: Optional[shared_operator_enum.OperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operator') }})
    
