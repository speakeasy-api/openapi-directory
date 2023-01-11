import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addon as shared_addon


@dataclass_json
@dataclasses.dataclass
class DeleteAddonResponse:
    addon: Optional[shared_addon.Addon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addon') }})
    
