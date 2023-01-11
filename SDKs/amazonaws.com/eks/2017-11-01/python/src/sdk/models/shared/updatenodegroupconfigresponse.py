import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import update as shared_update


@dataclass_json
@dataclasses.dataclass
class UpdateNodegroupConfigResponse:
    update: Optional[shared_update.Update] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    
