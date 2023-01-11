import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import finding_enum as shared_finding_enum
from ..shared import reasoncodesummary as shared_reasoncodesummary


@dataclass_json
@dataclasses.dataclass
class Summary:
    r"""Summary
    The summary of a recommendation.
    """
    
    name: Optional[shared_finding_enum.FindingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason_code_summaries: Optional[list[shared_reasoncodesummary.ReasonCodeSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCodeSummaries') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
