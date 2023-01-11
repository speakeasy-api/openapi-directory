import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationbackup as shared_destinationbackup


@dataclass_json
@dataclasses.dataclass
class CopyBackupToRegionResponse:
    destination_backup: Optional[shared_destinationbackup.DestinationBackup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationBackup') }})
    
