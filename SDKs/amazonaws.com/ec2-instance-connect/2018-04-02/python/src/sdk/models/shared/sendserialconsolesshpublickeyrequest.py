import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendSerialConsoleSSHPublicKeyRequest:
    instance_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    ssh_public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSHPublicKey') }})
    serial_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerialPort') }})
    
