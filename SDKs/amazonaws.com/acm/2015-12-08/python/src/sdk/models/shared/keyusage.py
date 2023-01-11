import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyusagename_enum as shared_keyusagename_enum


@dataclass_json
@dataclasses.dataclass
class KeyUsage:
    r"""KeyUsage
    The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.
    """
    
    name: Optional[shared_keyusagename_enum.KeyUsageNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
