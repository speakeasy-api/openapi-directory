import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentevidencefolder as shared_assessmentevidencefolder


@dataclass_json
@dataclasses.dataclass
class GetEvidenceFoldersByAssessmentControlResponse:
    evidence_folders: Optional[list[shared_assessmentevidencefolder.AssessmentEvidenceFolder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceFolders') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
