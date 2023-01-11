import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import studioencryptionconfigurationkeytype_enum as shared_studioencryptionconfigurationkeytype_enum


@dataclass_json
@dataclasses.dataclass
class StudioEncryptionConfiguration:
    r"""StudioEncryptionConfiguration
    Configuration of the encryption method that is used for the studio.
    """
    
    key_type: shared_studioencryptionconfigurationkeytype_enum.StudioEncryptionConfigurationKeyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyArn') }})
    
