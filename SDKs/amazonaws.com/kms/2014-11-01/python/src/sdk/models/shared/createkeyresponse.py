import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keymetadata as shared_keymetadata


@dataclass_json
@dataclasses.dataclass
class CreateKeyResponse:
    key_metadata: Optional[shared_keymetadata.KeyMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyMetadata') }})
    
