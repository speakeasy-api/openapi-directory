import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import smsmfasettingstype as shared_smsmfasettingstype
from ..shared import softwaretokenmfasettingstype as shared_softwaretokenmfasettingstype


@dataclass_json
@dataclasses.dataclass
class SetUserMfaPreferenceRequest:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    sms_mfa_settings: Optional[shared_smsmfasettingstype.SmsMfaSettingsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSMfaSettings') }})
    software_token_mfa_settings: Optional[shared_softwaretokenmfasettingstype.SoftwareTokenMfaSettingsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SoftwareTokenMfaSettings') }})
    
