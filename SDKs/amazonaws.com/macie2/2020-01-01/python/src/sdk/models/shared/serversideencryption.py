import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptiontype_enum as shared_encryptiontype_enum


@dataclass_json
@dataclasses.dataclass
class ServerSideEncryption:
    r"""ServerSideEncryption
    Provides information about the server-side encryption settings for an S3 bucket or S3 object.
    """
    
    encryption_type: Optional[shared_encryptiontype_enum.EncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    kms_master_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsMasterKeyId') }})
    
