import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import solutionsummary as shared_solutionsummary


@dataclass_json
@dataclasses.dataclass
class ListSolutionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    solutions: Optional[list[shared_solutionsummary.SolutionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutions') }})
    
