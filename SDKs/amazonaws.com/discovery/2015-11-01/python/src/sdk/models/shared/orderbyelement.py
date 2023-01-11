import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderstring_enum as shared_orderstring_enum


@dataclass_json
@dataclasses.dataclass
class OrderByElement:
    r"""OrderByElement
    A field and direction for ordered output.
    """
    
    field_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    sort_order: Optional[shared_orderstring_enum.OrderStringEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
