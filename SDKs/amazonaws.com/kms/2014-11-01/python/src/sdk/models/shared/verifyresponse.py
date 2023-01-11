import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import signingalgorithmspec_enum as shared_signingalgorithmspec_enum


@dataclass_json
@dataclasses.dataclass
class VerifyResponse:
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    signature_valid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignatureValid') }})
    signing_algorithm: Optional[shared_signingalgorithmspec_enum.SigningAlgorithmSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithm') }})
    
