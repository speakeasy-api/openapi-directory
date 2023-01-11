import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import evidence as shared_evidence


@dataclass_json
@dataclasses.dataclass
class GetEvidenceResponse:
    evidence: Optional[shared_evidence.Evidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidence') }})
    
