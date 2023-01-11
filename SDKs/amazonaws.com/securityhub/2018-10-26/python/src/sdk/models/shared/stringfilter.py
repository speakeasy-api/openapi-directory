import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stringfiltercomparison_enum as shared_stringfiltercomparison_enum


@dataclass_json
@dataclasses.dataclass
class StringFilter:
    r"""StringFilter
    A string filter for querying findings.
    """
    
    comparison: Optional[shared_stringfiltercomparison_enum.StringFilterComparisonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comparison') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
