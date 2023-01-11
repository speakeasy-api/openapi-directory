import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ldapssettinginfo as shared_ldapssettinginfo


@dataclass_json
@dataclasses.dataclass
class DescribeLdapsSettingsResult:
    ldaps_settings_info: Optional[list[shared_ldapssettinginfo.LdapsSettingInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LDAPSSettingsInfo') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
