import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scale as shared_scale


@dataclass_json
@dataclasses.dataclass
class UpdateTaskSetRequest:
    cluster: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    scale: shared_scale.Scale = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    service: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    task_set: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSet') }})
    
