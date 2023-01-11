import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import delegation as shared_delegation
from ..shared import batchcreatedelegationbyassessmenterror as shared_batchcreatedelegationbyassessmenterror


@dataclass_json
@dataclasses.dataclass
class BatchCreateDelegationByAssessmentResponse:
    delegations: Optional[list[shared_delegation.Delegation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegations') }})
    errors: Optional[list[shared_batchcreatedelegationbyassessmenterror.BatchCreateDelegationByAssessmentError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
