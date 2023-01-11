import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import solutionversion as shared_solutionversion


@dataclass_json
@dataclasses.dataclass
class DescribeSolutionVersionResponse:
    solution_version: Optional[shared_solutionversion.SolutionVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersion') }})
    
