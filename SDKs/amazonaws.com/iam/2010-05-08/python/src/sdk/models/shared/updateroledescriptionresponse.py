import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import role as shared_role


@dataclasses.dataclass
class UpdateRoleDescriptionResponse:
    role: Optional[shared_role.Role] = dataclasses.field(default=None)
    
