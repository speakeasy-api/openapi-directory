import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workload as shared_workload


@dataclass_json
@dataclasses.dataclass
class GetWorkloadOutput:
    r"""GetWorkloadOutput
    Output of a get workload call.
    """
    
    workload: Optional[shared_workload.Workload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workload') }})
    
