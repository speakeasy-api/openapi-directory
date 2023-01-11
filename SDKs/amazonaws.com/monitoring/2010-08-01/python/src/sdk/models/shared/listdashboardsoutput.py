import dataclasses
from typing import Optional
from ..shared import dashboardentry as shared_dashboardentry


@dataclasses.dataclass
class ListDashboardsOutput:
    dashboard_entries: Optional[list[shared_dashboardentry.DashboardEntry]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
