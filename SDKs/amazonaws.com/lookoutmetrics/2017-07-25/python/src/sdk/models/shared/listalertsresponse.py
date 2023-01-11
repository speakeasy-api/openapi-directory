import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alertsummary as shared_alertsummary


@dataclass_json
@dataclasses.dataclass
class ListAlertsResponse:
    alert_summary_list: Optional[list[shared_alertsummary.AlertSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
