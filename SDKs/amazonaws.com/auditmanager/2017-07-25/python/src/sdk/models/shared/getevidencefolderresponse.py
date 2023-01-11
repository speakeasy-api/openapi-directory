import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentevidencefolder as shared_assessmentevidencefolder


@dataclass_json
@dataclasses.dataclass
class GetEvidenceFolderResponse:
    evidence_folder: Optional[shared_assessmentevidencefolder.AssessmentEvidenceFolder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceFolder') }})
    
