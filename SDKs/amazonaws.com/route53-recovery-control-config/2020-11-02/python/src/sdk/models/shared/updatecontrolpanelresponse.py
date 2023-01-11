import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controlpanel as shared_controlpanel


@dataclass_json
@dataclasses.dataclass
class UpdateControlPanelResponse:
    control_panel: Optional[shared_controlpanel.ControlPanel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlPanel') }})
    
