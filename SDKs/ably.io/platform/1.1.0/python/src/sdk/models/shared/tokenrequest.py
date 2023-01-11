import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TokenRequest:
    capability: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capability') }})
    key_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyName') }})
    nonce: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    timestamp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    
