import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sharemethod_enum as shared_sharemethod_enum
from ..shared import sharetarget as shared_sharetarget


@dataclass_json
@dataclasses.dataclass
class ShareDirectoryRequest:
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    share_method: shared_sharemethod_enum.ShareMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareMethod') }})
    share_target: shared_sharetarget.ShareTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareTarget') }})
    share_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareNotes') }})
    
