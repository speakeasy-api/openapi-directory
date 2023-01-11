import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingaction as shared_findingaction
from ..shared import findingactor as shared_findingactor


@dataclass_json
@dataclasses.dataclass
class PolicyDetails:
    r"""PolicyDetails
    Provides the details of a policy finding.
    """
    
    action: Optional[shared_findingaction.FindingAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    actor: Optional[shared_findingactor.FindingActor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    
