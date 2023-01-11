import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationconfiguration as shared_remediationconfiguration


@dataclass_json
@dataclasses.dataclass
class FailedRemediationBatch:
    r"""FailedRemediationBatch
    List of each of the failed remediations with specific reasons.
    """
    
    failed_items: Optional[list[shared_remediationconfiguration.RemediationConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedItems') }})
    failure_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    
