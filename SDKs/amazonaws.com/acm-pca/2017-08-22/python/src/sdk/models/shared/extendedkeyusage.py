import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extendedkeyusagetype_enum as shared_extendedkeyusagetype_enum


@dataclass_json
@dataclasses.dataclass
class ExtendedKeyUsage:
    r"""ExtendedKeyUsage
    Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.
    """
    
    extended_key_usage_object_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsageObjectIdentifier') }})
    extended_key_usage_type: Optional[shared_extendedkeyusagetype_enum.ExtendedKeyUsageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsageType') }})
    
