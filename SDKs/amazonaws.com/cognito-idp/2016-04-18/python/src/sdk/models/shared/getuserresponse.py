import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mfaoptiontype as shared_mfaoptiontype
from ..shared import attributetype as shared_attributetype


@dataclass_json
@dataclasses.dataclass
class GetUserResponse:
    r"""GetUserResponse
    Represents the response from the server from the request to get information about the user.
    """
    
    user_attributes: list[shared_attributetype.AttributeType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    mfa_options: Optional[list[shared_mfaoptiontype.MfaOptionType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAOptions') }})
    preferred_mfa_setting: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMfaSetting') }})
    user_mfa_setting_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMFASettingList') }})
    
