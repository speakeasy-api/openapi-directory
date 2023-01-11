import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PasswordData:
    r"""PasswordData
    The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
    """
    
    ciphertext: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertext') }})
    key_pair_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairName') }})
    
