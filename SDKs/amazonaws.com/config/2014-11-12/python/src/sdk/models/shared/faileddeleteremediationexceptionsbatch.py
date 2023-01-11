import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationexceptionresourcekey as shared_remediationexceptionresourcekey


@dataclass_json
@dataclasses.dataclass
class FailedDeleteRemediationExceptionsBatch:
    r"""FailedDeleteRemediationExceptionsBatch
    List of each of the failed delete remediation exceptions with specific reasons.
    """
    
    failed_items: Optional[list[shared_remediationexceptionresourcekey.RemediationExceptionResourceKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedItems') }})
    failure_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    
