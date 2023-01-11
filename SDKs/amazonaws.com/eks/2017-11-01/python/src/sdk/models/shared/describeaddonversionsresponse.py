import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addoninfo as shared_addoninfo


@dataclass_json
@dataclasses.dataclass
class DescribeAddonVersionsResponse:
    addons: Optional[list[shared_addoninfo.AddonInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addons') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
