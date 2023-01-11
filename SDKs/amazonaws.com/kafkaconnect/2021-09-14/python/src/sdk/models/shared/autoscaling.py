import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scaleinpolicy as shared_scaleinpolicy
from ..shared import scaleoutpolicy as shared_scaleoutpolicy


@dataclass_json
@dataclasses.dataclass
class AutoScaling:
    r"""AutoScaling
    Specifies how the connector scales.
    """
    
    max_worker_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkerCount') }})
    mcu_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    min_worker_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minWorkerCount') }})
    scale_in_policy: Optional[shared_scaleinpolicy.ScaleInPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleInPolicy') }})
    scale_out_policy: Optional[shared_scaleoutpolicy.ScaleOutPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleOutPolicy') }})
    
