import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionconfig as shared_encryptionconfig


@dataclass_json
@dataclasses.dataclass
class GetEncryptionConfigResult:
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfig') }})
    
