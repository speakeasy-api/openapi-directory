import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import condition as shared_condition
from ..shared import logical_enum as shared_logical_enum


@dataclass_json
@dataclasses.dataclass
class Predicate:
    r"""Predicate
    Defines the predicate of the trigger, which determines when it fires.
    """
    
    conditions: Optional[list[shared_condition.Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conditions') }})
    logical: Optional[shared_logical_enum.LogicalEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logical') }})
    
