import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateactionlist as shared_updateactionlist


@dataclasses.dataclass
class UpdateActionsMessage:
    marker: Optional[str] = dataclasses.field(default=None)
    update_actions: Optional[list[shared_updateactionlist.UpdateActionList]] = dataclasses.field(default=None)
    
