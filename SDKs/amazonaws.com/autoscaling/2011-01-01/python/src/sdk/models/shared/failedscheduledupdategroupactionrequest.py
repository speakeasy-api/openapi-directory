import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class FailedScheduledUpdateGroupActionRequest:
    r"""FailedScheduledUpdateGroupActionRequest
    Describes a scheduled action that could not be created, updated, or deleted.
    """
    
    scheduled_action_name: str = dataclasses.field()
    error_code: Optional[str] = dataclasses.field(default=None)
    error_message: Optional[str] = dataclasses.field(default=None)
    
