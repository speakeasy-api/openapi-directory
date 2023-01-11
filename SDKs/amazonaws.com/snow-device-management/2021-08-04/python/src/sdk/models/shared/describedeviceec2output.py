import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancesummary as shared_instancesummary


@dataclass_json
@dataclasses.dataclass
class DescribeDeviceEc2Output:
    instances: Optional[list[shared_instancesummary.InstanceSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    
