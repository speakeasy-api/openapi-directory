import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UserStorage:
    r"""UserStorage
    Describes the user volume for a WorkSpace bundle.
    """
    
    capacity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capacity') }})
    
