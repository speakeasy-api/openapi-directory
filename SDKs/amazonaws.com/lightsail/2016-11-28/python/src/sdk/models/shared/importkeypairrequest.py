import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImportKeyPairRequest:
    key_pair_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairName') }})
    public_key_base64: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyBase64') }})
    
