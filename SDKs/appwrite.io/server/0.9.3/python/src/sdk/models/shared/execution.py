import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Execution:
    r"""Execution
    Execution
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    date_created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    exit_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    function_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionId') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stderr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stderr') }})
    stdout: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stdout') }})
    time: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    trigger: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
