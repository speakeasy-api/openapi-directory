import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileshare as shared_fileshare
from ..shared import fileshareusage as shared_fileshareusage


@dataclass_json
@dataclasses.dataclass
class GetFileshareDetails:
    fs: Optional[list[shared_fileshare.Fileshare]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fs') }})
    fs_usage: Optional[list[shared_fileshareusage.FileshareUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fsUsage') }})
    volnames: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volnames') }})
    
