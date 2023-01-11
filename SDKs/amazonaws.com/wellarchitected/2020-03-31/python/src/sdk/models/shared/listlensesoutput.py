import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lenssummary as shared_lenssummary


@dataclass_json
@dataclasses.dataclass
class ListLensesOutput:
    r"""ListLensesOutput
    Output of a list lenses call.
    """
    
    lens_summaries: Optional[list[shared_lenssummary.LensSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
