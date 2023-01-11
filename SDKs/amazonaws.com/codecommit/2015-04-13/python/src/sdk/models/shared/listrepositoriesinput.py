import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderenum_enum as shared_orderenum_enum
from ..shared import sortbyenum_enum as shared_sortbyenum_enum


@dataclass_json
@dataclasses.dataclass
class ListRepositoriesInput:
    r"""ListRepositoriesInput
    Represents the input of a list repositories operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    order: Optional[shared_orderenum_enum.OrderEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    sort_by: Optional[shared_sortbyenum_enum.SortByEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    
