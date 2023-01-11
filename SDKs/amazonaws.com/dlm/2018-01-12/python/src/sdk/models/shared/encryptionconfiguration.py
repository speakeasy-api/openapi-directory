import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EncryptionConfiguration:
    r"""EncryptionConfiguration
    Specifies the encryption settings for shared snapshots that are copied across Regions.
    """
    
    encrypted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    cmk_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CmkArn') }})
    
