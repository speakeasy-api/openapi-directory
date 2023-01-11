import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import problem as shared_problem


@dataclass_json
@dataclasses.dataclass
class DescribeProblemResponse:
    problem: Optional[shared_problem.Problem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Problem') }})
    
