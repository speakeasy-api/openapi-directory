import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keytype_enum as shared_keytype_enum


@dataclass_json
@dataclasses.dataclass
class DeliveryStreamEncryptionConfigurationInput:
    r"""DeliveryStreamEncryptionConfigurationInput
    Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE). 
    """
    
    key_type: shared_keytype_enum.KeyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyType') }})
    key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyARN') }})
    
