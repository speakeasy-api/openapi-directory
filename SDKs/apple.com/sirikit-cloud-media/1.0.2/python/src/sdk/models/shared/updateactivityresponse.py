import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queue as shared_queue
from ..shared import useractivity as shared_useractivity


@dataclass_json
@dataclasses.dataclass
class UpdateActivityResponse:
    queue: Optional[shared_queue.Queue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queue') }})
    user_activity: Optional[shared_useractivity.UserActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userActivity') }})
    
