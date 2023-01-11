import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AttachDiskRequest:
    disk_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskName') }})
    disk_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskPath') }})
    instance_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    
