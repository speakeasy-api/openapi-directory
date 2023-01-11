import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Team:
    r"""Team
    Team
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    date_created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
