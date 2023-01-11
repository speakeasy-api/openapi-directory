import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResolveCaseResponse:
    r"""ResolveCaseResponse
    The status of the case returned by the <a>ResolveCase</a> operation.
    """
    
    final_case_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalCaseStatus') }})
    initial_case_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialCaseStatus') }})
    
