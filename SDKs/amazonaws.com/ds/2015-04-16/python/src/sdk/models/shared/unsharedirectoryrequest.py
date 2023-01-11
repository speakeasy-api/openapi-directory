import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import unsharetarget as shared_unsharetarget


@dataclass_json
@dataclasses.dataclass
class UnshareDirectoryRequest:
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    unshare_target: shared_unsharetarget.UnshareTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnshareTarget') }})
    
