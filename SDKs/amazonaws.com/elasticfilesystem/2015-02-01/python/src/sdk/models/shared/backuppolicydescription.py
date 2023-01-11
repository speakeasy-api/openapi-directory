import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backuppolicy as shared_backuppolicy


@dataclass_json
@dataclasses.dataclass
class BackupPolicyDescription:
    backup_policy: Optional[shared_backuppolicy.BackupPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupPolicy') }})
    
