import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Tag:
    r"""Tag
    Tag
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    date_created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    function_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionId') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
