import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DirectoryDeletedException:
    r"""DirectoryDeletedException
    A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
