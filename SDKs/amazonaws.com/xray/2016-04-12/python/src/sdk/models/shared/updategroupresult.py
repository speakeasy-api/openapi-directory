import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group as shared_group


@dataclass_json
@dataclasses.dataclass
class UpdateGroupResult:
    group: Optional[shared_group.Group] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    
