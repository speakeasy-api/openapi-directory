import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extendedkeyusagename_enum as shared_extendedkeyusagename_enum


@dataclass_json
@dataclasses.dataclass
class ExtendedKeyUsage:
    r"""ExtendedKeyUsage
    The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension. 
    """
    
    name: Optional[shared_extendedkeyusagename_enum.ExtendedKeyUsageNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    oid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OID') }})
    
