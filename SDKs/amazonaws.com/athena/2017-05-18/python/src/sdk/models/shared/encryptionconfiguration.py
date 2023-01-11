import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionoption_enum as shared_encryptionoption_enum


@dataclass_json
@dataclasses.dataclass
class EncryptionConfiguration:
    r"""EncryptionConfiguration
    If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.
    """
    
    encryption_option: shared_encryptionoption_enum.EncryptionOptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionOption') }})
    kms_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKey') }})
    
