import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import keygroup as shared_keygroup


@dataclasses.dataclass
class UpdateKeyGroupResult:
    key_group: Optional[shared_keygroup.KeyGroup] = dataclasses.field(default=None)
    
