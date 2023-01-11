import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class ReputationOptions:
    r"""ReputationOptions
    Contains information about the reputation settings for a configuration set.
    """
    
    last_fresh_start: Optional[datetime] = dataclasses.field(default=None)
    reputation_metrics_enabled: Optional[bool] = dataclasses.field(default=None)
    sending_enabled: Optional[bool] = dataclasses.field(default=None)
    
