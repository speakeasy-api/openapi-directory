import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sortorder_enum as shared_sortorder_enum


@dataclass_json
@dataclasses.dataclass
class SortCriterion:
    r"""SortCriterion
    A collection of finding attributes used to sort findings.
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Field') }})
    sort_order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    
