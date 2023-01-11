import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import setting as shared_setting


@dataclass_json
@dataclasses.dataclass
class PutAccountSettingDefaultResponse:
    setting: Optional[shared_setting.Setting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    
