import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alert as shared_alert


@dataclass_json
@dataclasses.dataclass
class DescribeAlertResponse:
    alert: Optional[shared_alert.Alert] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alert') }})
    
