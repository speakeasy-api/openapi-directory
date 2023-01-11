import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class InstanceRefreshLivePoolProgress:
    r"""InstanceRefreshLivePoolProgress
    Reports the progress of an instance refresh on instances that are in the Auto Scaling group.
    """
    
    instances_to_update: Optional[int] = dataclasses.field(default=None)
    percentage_complete: Optional[int] = dataclasses.field(default=None)
    
