import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mfaoptiontype as shared_mfaoptiontype


@dataclass_json
@dataclasses.dataclass
class AdminSetUserSettingsRequest:
    r"""AdminSetUserSettingsRequest
    You can use this parameter to set an MFA configuration that uses the SMS delivery medium.
    """
    
    mfa_options: list[shared_mfaoptiontype.MfaOptionType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAOptions') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
