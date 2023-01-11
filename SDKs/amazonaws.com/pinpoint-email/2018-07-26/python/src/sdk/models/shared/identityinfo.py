import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identitytype_enum as shared_identitytype_enum


@dataclass_json
@dataclasses.dataclass
class IdentityInfo:
    r"""IdentityInfo
    Information about an email identity.
    """
    
    identity_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityName') }})
    identity_type: Optional[shared_identitytype_enum.IdentityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityType') }})
    sending_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingEnabled') }})
    
