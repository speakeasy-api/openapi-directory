import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RestoreServerRequest:
    backup_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupId') }})
    server_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    key_pair: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPair') }})
    
