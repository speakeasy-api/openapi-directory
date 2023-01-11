import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import manualevidence as shared_manualevidence


@dataclass_json
@dataclasses.dataclass
class BatchImportEvidenceToAssessmentControlError:
    r"""BatchImportEvidenceToAssessmentControlError
     An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message. 
    """
    
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    manual_evidence: Optional[shared_manualevidence.ManualEvidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualEvidence') }})
    
