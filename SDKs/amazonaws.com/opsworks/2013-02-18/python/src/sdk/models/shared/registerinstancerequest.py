import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceidentity as shared_instanceidentity


@dataclass_json
@dataclasses.dataclass
class RegisterInstanceRequest:
    stack_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    instance_identity: Optional[shared_instanceidentity.InstanceIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIdentity') }})
    private_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateIp') }})
    public_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicIp') }})
    rsa_public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RsaPublicKey') }})
    rsa_public_key_fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RsaPublicKeyFingerprint') }})
    
