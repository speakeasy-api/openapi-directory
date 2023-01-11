import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mapfiltercomparison_enum as shared_mapfiltercomparison_enum


@dataclass_json
@dataclasses.dataclass
class MapFilter:
    r"""MapFilter
    A map filter for querying findings. Each map filter provides the field to check, the value to look for, and the comparison operator.
    """
    
    comparison: Optional[shared_mapfiltercomparison_enum.MapFilterComparisonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comparison') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
