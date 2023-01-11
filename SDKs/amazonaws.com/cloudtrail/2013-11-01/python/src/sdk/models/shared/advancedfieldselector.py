import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdvancedFieldSelector:
    r"""AdvancedFieldSelector
    A single selector statement in an advanced event selector.
    """
    
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Field') }})
    ends_with: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndsWith') }})
    equals: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Equals') }})
    not_ends_with: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotEndsWith') }})
    not_equals: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotEquals') }})
    not_starts_with: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotStartsWith') }})
    starts_with: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartsWith') }})
    
