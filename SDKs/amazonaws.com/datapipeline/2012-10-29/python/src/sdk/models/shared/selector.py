import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operator as shared_operator


@dataclass_json
@dataclasses.dataclass
class Selector:
    r"""Selector
    A comparision that is used to determine whether a query should return this object.
    """
    
    field_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    operator: Optional[shared_operator.Operator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
