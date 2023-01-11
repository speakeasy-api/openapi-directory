import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamingimageencryptionconfigurationkeytype_enum as shared_streamingimageencryptionconfigurationkeytype_enum


@dataclass_json
@dataclasses.dataclass
class StreamingImageEncryptionConfiguration:
    key_type: shared_streamingimageencryptionconfigurationkeytype_enum.StreamingImageEncryptionConfigurationKeyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyArn') }})
    
