import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterUsageRequest:
    product_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    public_key_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKeyVersion') }})
    nonce: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nonce') }})
    
