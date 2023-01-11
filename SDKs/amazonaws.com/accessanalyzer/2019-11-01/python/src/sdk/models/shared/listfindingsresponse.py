import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingsummary as shared_findingsummary


@dataclass_json
@dataclasses.dataclass
class ListFindingsResponse:
    r"""ListFindingsResponse
    The response to the request.
    """
    
    findings: list[shared_findingsummary.FindingSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
