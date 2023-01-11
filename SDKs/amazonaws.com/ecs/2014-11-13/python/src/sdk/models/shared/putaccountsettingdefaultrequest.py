import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import settingname_enum as shared_settingname_enum


@dataclass_json
@dataclasses.dataclass
class PutAccountSettingDefaultRequest:
    name: shared_settingname_enum.SettingNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
