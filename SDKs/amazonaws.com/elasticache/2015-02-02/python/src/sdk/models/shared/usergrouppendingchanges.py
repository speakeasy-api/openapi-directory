import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class UserGroupPendingChanges:
    r"""UserGroupPendingChanges
    Returns the updates being applied to the user group.
    """
    
    user_ids_to_add: Optional[list[str]] = dataclasses.field(default=None)
    user_ids_to_remove: Optional[list[str]] = dataclasses.field(default=None)
    
