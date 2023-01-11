import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import installedcomponent as shared_installedcomponent


@dataclass_json
@dataclasses.dataclass
class ListInstalledComponentsResponse:
    installed_components: Optional[list[shared_installedcomponent.InstalledComponent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installedComponents') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
