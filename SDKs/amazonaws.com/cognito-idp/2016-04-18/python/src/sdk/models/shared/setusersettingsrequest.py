import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mfaoptiontype as shared_mfaoptiontype


@dataclass_json
@dataclasses.dataclass
class SetUserSettingsRequest:
    r"""SetUserSettingsRequest
    Represents the request to set user settings.
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    mfa_options: list[shared_mfaoptiontype.MfaOptionType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAOptions') }})
    
