import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendSSHPublicKeyRequest:
    availability_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    instance_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    instance_os_user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceOSUser') }})
    ssh_public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSHPublicKey') }})
    
