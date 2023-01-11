import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scaleinpolicydescription as shared_scaleinpolicydescription
from ..shared import scaleoutpolicydescription as shared_scaleoutpolicydescription


@dataclass_json
@dataclasses.dataclass
class AutoScalingDescription:
    r"""AutoScalingDescription
    Information about the auto scaling parameters for the connector.
    """
    
    max_worker_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkerCount') }})
    mcu_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    min_worker_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minWorkerCount') }})
    scale_in_policy: Optional[shared_scaleinpolicydescription.ScaleInPolicyDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleInPolicy') }})
    scale_out_policy: Optional[shared_scaleoutpolicydescription.ScaleOutPolicyDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleOutPolicy') }})
    
