import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpoolmfatype_enum as shared_userpoolmfatype_enum
from ..shared import smsmfaconfigtype as shared_smsmfaconfigtype
from ..shared import softwaretokenmfaconfigtype as shared_softwaretokenmfaconfigtype


@dataclass_json
@dataclasses.dataclass
class SetUserPoolMfaConfigResponse:
    mfa_configuration: Optional[shared_userpoolmfatype_enum.UserPoolMfaTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaConfiguration') }})
    sms_mfa_configuration: Optional[shared_smsmfaconfigtype.SmsMfaConfigType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsMfaConfiguration') }})
    software_token_mfa_configuration: Optional[shared_softwaretokenmfaconfigtype.SoftwareTokenMfaConfigType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SoftwareTokenMfaConfiguration') }})
    
