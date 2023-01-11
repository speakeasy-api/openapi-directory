import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uniqueproblem as shared_uniqueproblem


@dataclass_json
@dataclasses.dataclass
class ListUniqueProblemsResult:
    r"""ListUniqueProblemsResult
    Represents the result of a list unique problems request.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    unique_problems: Optional[dict[str, list[shared_uniqueproblem.UniqueProblem]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueProblems') }})
    
