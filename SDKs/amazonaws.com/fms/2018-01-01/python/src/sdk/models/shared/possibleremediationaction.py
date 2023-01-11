import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationactionwithorder as shared_remediationactionwithorder


@dataclass_json
@dataclasses.dataclass
class PossibleRemediationAction:
    r"""PossibleRemediationAction
    A list of remediation actions.
    """
    
    ordered_remediation_actions: list[shared_remediationactionwithorder.RemediationActionWithOrder] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderedRemediationActions') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_default_action: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsDefaultAction') }})
    
