import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dashboardsummary as shared_dashboardsummary


@dataclass_json
@dataclasses.dataclass
class ListDashboardsResponse:
    dashboard_summaries: list[shared_dashboardsummary.DashboardSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
