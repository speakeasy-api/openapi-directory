import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Token:
    r"""Token
    Token
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    expire: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
