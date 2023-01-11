import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messagetype_enum as shared_messagetype_enum
from ..shared import signingalgorithmspec_enum as shared_signingalgorithmspec_enum


@dataclass_json
@dataclasses.dataclass
class SignRequest:
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    signing_algorithm: shared_signingalgorithmspec_enum.SigningAlgorithmSpecEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithm') }})
    grant_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    message_type: Optional[shared_messagetype_enum.MessageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageType') }})
    
