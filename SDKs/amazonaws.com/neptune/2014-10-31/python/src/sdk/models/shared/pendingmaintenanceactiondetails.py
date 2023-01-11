import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PendingMaintenanceActionDetails:
    r"""PendingMaintenanceActionDetails
    Provides information about a pending maintenance action for a resource.
    """
    
    action: Optional[str] = dataclasses.field(default=None)
    auto_applied_after_date: Optional[datetime] = dataclasses.field(default=None)
    current_apply_date: Optional[datetime] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    forced_apply_date: Optional[datetime] = dataclasses.field(default=None)
    opt_in_status: Optional[str] = dataclasses.field(default=None)
    
