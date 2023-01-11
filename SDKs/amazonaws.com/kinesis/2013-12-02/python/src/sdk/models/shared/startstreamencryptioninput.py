import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptiontype_enum as shared_encryptiontype_enum


@dataclass_json
@dataclasses.dataclass
class StartStreamEncryptionInput:
    encryption_type: shared_encryptiontype_enum.EncryptionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
