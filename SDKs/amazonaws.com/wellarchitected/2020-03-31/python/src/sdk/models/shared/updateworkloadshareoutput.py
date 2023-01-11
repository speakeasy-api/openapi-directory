import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workloadshare as shared_workloadshare


@dataclass_json
@dataclasses.dataclass
class UpdateWorkloadShareOutput:
    r"""UpdateWorkloadShareOutput
    Input for Update Workload Share
    """
    
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    workload_share: Optional[shared_workloadshare.WorkloadShare] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadShare') }})
    
