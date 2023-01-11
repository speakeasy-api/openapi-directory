import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ssmautomation as shared_ssmautomation


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    The action that starts at the beginning of an incident. The response plan defines the action.
    """
    
    ssm_automation: Optional[shared_ssmautomation.SsmAutomation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmAutomation') }})
    
