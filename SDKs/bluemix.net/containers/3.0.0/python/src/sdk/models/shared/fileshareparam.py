import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FileshareParam:
    fs_iops: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsIOPS') }})
    fs_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsName') }})
    fs_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsSize') }})
    
