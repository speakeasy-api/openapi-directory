import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparator_enum as shared_comparator_enum


@dataclass_json
@dataclasses.dataclass
class PropertyPredicate:
    r"""PropertyPredicate
    Defines a property predicate.
    """
    
    comparator: Optional[shared_comparator_enum.ComparatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comparator') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
