import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclelasttestfinalized as shared_lifecyclelasttestfinalized
from ..shared import lifecyclelasttestinitiated as shared_lifecyclelasttestinitiated
from ..shared import lifecyclelasttestreverted as shared_lifecyclelasttestreverted


@dataclass_json
@dataclasses.dataclass
class LifeCycleLastTest:
    r"""LifeCycleLastTest
    Lifecycle last Test.
    """
    
    finalized: Optional[shared_lifecyclelasttestfinalized.LifeCycleLastTestFinalized] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalized') }})
    initiated: Optional[shared_lifecyclelasttestinitiated.LifeCycleLastTestInitiated] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiated') }})
    reverted: Optional[shared_lifecyclelasttestreverted.LifeCycleLastTestReverted] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverted') }})
    
