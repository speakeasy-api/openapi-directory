import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssignVolumeRequest:
    volume_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeId') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    
