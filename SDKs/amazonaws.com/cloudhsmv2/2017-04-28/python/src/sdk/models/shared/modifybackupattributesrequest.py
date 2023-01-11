import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ModifyBackupAttributesRequest:
    backup_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupId') }})
    never_expires: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NeverExpires') }})
    
