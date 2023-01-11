import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import problem as shared_problem


@dataclass_json
@dataclasses.dataclass
class UniqueProblem:
    r"""UniqueProblem
    A collection of one or more problems, grouped by their result.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    problems: Optional[list[shared_problem.Problem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('problems') }})
    
