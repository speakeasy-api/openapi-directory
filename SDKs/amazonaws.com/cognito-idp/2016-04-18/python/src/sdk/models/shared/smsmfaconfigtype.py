import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import smsconfigurationtype as shared_smsconfigurationtype


@dataclass_json
@dataclasses.dataclass
class SmsMfaConfigType:
    r"""SmsMfaConfigType
    The SMS text message multi-factor authentication (MFA) configuration type.
    """
    
    sms_authentication_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsAuthenticationMessage') }})
    sms_configuration: Optional[shared_smsconfigurationtype.SmsConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsConfiguration') }})
    
