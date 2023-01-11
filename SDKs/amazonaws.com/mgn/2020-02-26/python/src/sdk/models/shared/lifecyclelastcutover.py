import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclelastcutoverfinalized as shared_lifecyclelastcutoverfinalized
from ..shared import lifecyclelastcutoverinitiated as shared_lifecyclelastcutoverinitiated
from ..shared import lifecyclelastcutoverreverted as shared_lifecyclelastcutoverreverted


@dataclass_json
@dataclasses.dataclass
class LifeCycleLastCutover:
    r"""LifeCycleLastCutover
    Lifecycle last Cutover .
    """
    
    finalized: Optional[shared_lifecyclelastcutoverfinalized.LifeCycleLastCutoverFinalized] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalized') }})
    initiated: Optional[shared_lifecyclelastcutoverinitiated.LifeCycleLastCutoverInitiated] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiated') }})
    reverted: Optional[shared_lifecyclelastcutoverreverted.LifeCycleLastCutoverReverted] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverted') }})
    
