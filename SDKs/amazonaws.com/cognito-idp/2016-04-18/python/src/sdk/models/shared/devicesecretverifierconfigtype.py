import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeviceSecretVerifierConfigType:
    r"""DeviceSecretVerifierConfigType
    The device verifier against which it will be authenticated.
    """
    
    password_verifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordVerifier') }})
    salt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salt') }})
    
