import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchdeletedelegationbyassessmenterror as shared_batchdeletedelegationbyassessmenterror


@dataclass_json
@dataclasses.dataclass
class BatchDeleteDelegationByAssessmentResponse:
    errors: Optional[list[shared_batchdeletedelegationbyassessmenterror.BatchDeleteDelegationByAssessmentError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
