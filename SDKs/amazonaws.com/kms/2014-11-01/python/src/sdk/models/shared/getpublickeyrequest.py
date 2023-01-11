import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetPublicKeyRequest:
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    grant_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    
