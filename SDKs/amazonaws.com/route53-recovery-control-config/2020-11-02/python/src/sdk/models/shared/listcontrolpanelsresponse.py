import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controlpanel as shared_controlpanel


@dataclass_json
@dataclasses.dataclass
class ListControlPanelsResponse:
    control_panels: Optional[list[shared_controlpanel.ControlPanel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanels') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
