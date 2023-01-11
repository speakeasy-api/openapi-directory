import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filtertype_enum as shared_filtertype_enum


@dataclass_json
@dataclasses.dataclass
class Filter:
    r"""Filter
    The constraints that you want all returned products to match.
    """
    
    field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Field') }})
    type: shared_filtertype_enum.FilterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
