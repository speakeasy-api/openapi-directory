import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class DashboardEntry:
    r"""DashboardEntry
    Represents a specific dashboard.
    """
    
    dashboard_arn: Optional[str] = dataclasses.field(default=None)
    dashboard_name: Optional[str] = dataclasses.field(default=None)
    last_modified: Optional[datetime] = dataclasses.field(default=None)
    size: Optional[int] = dataclasses.field(default=None)
    
