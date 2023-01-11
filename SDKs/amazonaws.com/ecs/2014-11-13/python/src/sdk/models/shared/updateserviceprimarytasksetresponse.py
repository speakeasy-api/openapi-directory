import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskset as shared_taskset


@dataclass_json
@dataclasses.dataclass
class UpdateServicePrimaryTaskSetResponse:
    task_set: Optional[shared_taskset.TaskSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSet') }})
    
