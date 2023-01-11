import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backup as shared_backup


@dataclass_json
@dataclasses.dataclass
class ModifyBackupAttributesResponse:
    backup: Optional[shared_backup.Backup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Backup') }})
    
