import dataclasses
from typing import Optional
from ..shared import dashboardvalidationmessage as shared_dashboardvalidationmessage


@dataclasses.dataclass
class PutDashboardOutput:
    dashboard_validation_messages: Optional[list[shared_dashboardvalidationmessage.DashboardValidationMessage]] = dataclasses.field(default=None)
    
