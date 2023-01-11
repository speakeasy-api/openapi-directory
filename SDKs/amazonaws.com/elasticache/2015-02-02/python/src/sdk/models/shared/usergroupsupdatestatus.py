import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class UserGroupsUpdateStatus:
    r"""UserGroupsUpdateStatus
    The status of the user group update.
    """
    
    user_group_ids_to_add: Optional[list[str]] = dataclasses.field(default=None)
    user_group_ids_to_remove: Optional[list[str]] = dataclasses.field(default=None)
    
