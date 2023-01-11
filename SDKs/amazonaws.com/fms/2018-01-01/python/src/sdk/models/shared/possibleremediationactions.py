import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import possibleremediationaction as shared_possibleremediationaction


@dataclass_json
@dataclasses.dataclass
class PossibleRemediationActions:
    r"""PossibleRemediationActions
    A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
    """
    
    actions: Optional[list[shared_possibleremediationaction.PossibleRemediationAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
