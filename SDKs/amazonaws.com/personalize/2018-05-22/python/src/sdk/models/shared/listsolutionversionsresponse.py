import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import solutionversionsummary as shared_solutionversionsummary


@dataclass_json
@dataclasses.dataclass
class ListSolutionVersionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    solution_versions: Optional[list[shared_solutionversionsummary.SolutionVersionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersions') }})
    
