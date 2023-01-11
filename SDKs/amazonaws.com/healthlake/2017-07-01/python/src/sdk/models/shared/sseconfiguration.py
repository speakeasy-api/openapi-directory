import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kmsencryptionconfig as shared_kmsencryptionconfig


@dataclass_json
@dataclasses.dataclass
class SseConfiguration:
    r"""SseConfiguration
     The server-side encryption key configuration for a customer provided encryption key. 
    """
    
    kms_encryption_config: shared_kmsencryptionconfig.KmsEncryptionConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsEncryptionConfig') }})
    
