import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentreportevidenceerror as shared_assessmentreportevidenceerror


@dataclass_json
@dataclasses.dataclass
class BatchDisassociateAssessmentReportEvidenceResponse:
    errors: Optional[list[shared_assessmentreportevidenceerror.AssessmentReportEvidenceError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    evidence_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceIds') }})
    
