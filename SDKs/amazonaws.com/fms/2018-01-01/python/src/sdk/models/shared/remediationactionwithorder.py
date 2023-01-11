import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationaction as shared_remediationaction


@dataclass_json
@dataclasses.dataclass
class RemediationActionWithOrder:
    r"""RemediationActionWithOrder
    An ordered list of actions you can take to remediate a violation.
    """
    
    order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Order') }})
    remediation_action: Optional[shared_remediationaction.RemediationAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationAction') }})
    
