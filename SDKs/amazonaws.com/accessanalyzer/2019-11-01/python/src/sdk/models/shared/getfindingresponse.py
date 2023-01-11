import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import finding as shared_finding


@dataclass_json
@dataclasses.dataclass
class GetFindingResponse:
    r"""GetFindingResponse
    The response to the request.
    """
    
    finding: Optional[shared_finding.Finding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    
