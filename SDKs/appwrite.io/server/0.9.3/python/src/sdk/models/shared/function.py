import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Function:
    r"""Function
    Function
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    dollar_permissions: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$permissions') }})
    date_created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    date_updated: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateUpdated') }})
    events: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runtime: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    schedule: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    schedule_next: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleNext') }})
    schedule_previous: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulePrevious') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    timeout: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    vars: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vars') }})
    
