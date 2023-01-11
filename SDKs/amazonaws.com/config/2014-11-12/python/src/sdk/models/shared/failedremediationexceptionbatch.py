import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationexception as shared_remediationexception


@dataclass_json
@dataclasses.dataclass
class FailedRemediationExceptionBatch:
    r"""FailedRemediationExceptionBatch
    List of each of the failed remediation exceptions with specific reasons.
    """
    
    failed_items: Optional[list[shared_remediationexception.RemediationException]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedItems') }})
    failure_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    
