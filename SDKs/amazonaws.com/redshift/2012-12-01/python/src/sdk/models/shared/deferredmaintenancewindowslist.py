import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class DeferredMaintenanceWindowsList:
    r"""DeferredMaintenanceWindowsList
    Describes a deferred maintenance window
    """
    
    defer_maintenance_end_time: Optional[datetime] = dataclasses.field(default=None)
    defer_maintenance_identifier: Optional[str] = dataclasses.field(default=None)
    defer_maintenance_start_time: Optional[datetime] = dataclasses.field(default=None)
    
