import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Email:
    r"""Email
    Email
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    primary: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    verified: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    visibility: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
