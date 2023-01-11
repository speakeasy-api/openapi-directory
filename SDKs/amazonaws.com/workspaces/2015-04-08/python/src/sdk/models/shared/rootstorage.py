import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RootStorage:
    r"""RootStorage
    Describes the root volume for a WorkSpace bundle.
    """
    
    capacity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capacity') }})
    
