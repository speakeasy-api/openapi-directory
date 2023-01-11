import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crypto as shared_crypto


@dataclass_json
@dataclasses.dataclass
class Content:
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    crypto: shared_crypto.Crypto = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('crypto') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
