import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sort_enum as shared_sort_enum


@dataclass_json
@dataclasses.dataclass
class SortCriterion:
    r"""SortCriterion
    Specifies a field to sort by and a sort order.
    """
    
    field_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldName') }})
    sort: Optional[shared_sort_enum.SortEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sort') }})
    
