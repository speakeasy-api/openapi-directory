import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImportSSHPublicKeyRequest:
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    ssh_public_key_body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshPublicKeyBody') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
