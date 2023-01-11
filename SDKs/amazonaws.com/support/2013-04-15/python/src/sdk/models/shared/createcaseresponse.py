import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateCaseResponse:
    r"""CreateCaseResponse
    The support case ID returned by a successful completion of the <a>CreateCase</a> operation.
    """
    
    case_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseId') }})
    
