import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientauthenticationsettinginfo as shared_clientauthenticationsettinginfo


@dataclass_json
@dataclasses.dataclass
class DescribeClientAuthenticationSettingsResult:
    client_authentication_settings_info: Optional[list[shared_clientauthenticationsettinginfo.ClientAuthenticationSettingInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientAuthenticationSettingsInfo') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
