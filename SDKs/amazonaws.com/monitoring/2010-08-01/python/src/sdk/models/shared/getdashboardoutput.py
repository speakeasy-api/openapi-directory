import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDashboardOutput:
    dashboard_arn: Optional[str] = dataclasses.field(default=None)
    dashboard_body: Optional[str] = dataclasses.field(default=None)
    dashboard_name: Optional[str] = dataclasses.field(default=None)
    
