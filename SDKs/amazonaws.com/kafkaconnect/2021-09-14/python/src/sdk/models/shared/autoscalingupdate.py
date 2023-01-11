import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scaleinpolicyupdate as shared_scaleinpolicyupdate
from ..shared import scaleoutpolicyupdate as shared_scaleoutpolicyupdate


@dataclass_json
@dataclasses.dataclass
class AutoScalingUpdate:
    r"""AutoScalingUpdate
    The updates to the auto scaling parameters for the connector.
    """
    
    max_worker_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkerCount') }})
    mcu_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    min_worker_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minWorkerCount') }})
    scale_in_policy: shared_scaleinpolicyupdate.ScaleInPolicyUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleInPolicy') }})
    scale_out_policy: shared_scaleoutpolicyupdate.ScaleOutPolicyUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleOutPolicy') }})
    
