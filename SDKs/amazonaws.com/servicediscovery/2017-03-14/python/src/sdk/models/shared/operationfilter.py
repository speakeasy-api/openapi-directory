import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filtercondition_enum as shared_filtercondition_enum
from ..shared import operationfiltername_enum as shared_operationfiltername_enum


@dataclass_json
@dataclasses.dataclass
class OperationFilter:
    r"""OperationFilter
    A complex type that lets you select the operations that you want to list.
    """
    
    name: shared_operationfiltername_enum.OperationFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    condition: Optional[shared_filtercondition_enum.FilterConditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    
