import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cipherparams as shared_cipherparams
from ..shared import kdfparams as shared_kdfparams


@dataclass_json
@dataclasses.dataclass
class Crypto:
    cipher: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cipher') }})
    cipherparams: shared_cipherparams.Cipherparams = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cipherparams') }})
    ciphertext: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertext') }})
    kdf: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kdf') }})
    kdfparams: shared_kdfparams.Kdfparams = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kdfparams') }})
    mac: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    
