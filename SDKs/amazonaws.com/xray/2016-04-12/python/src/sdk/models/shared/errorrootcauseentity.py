import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rootcauseexception as shared_rootcauseexception


@dataclass_json
@dataclasses.dataclass
class ErrorRootCauseEntity:
    r"""ErrorRootCauseEntity
    A collection of segments and corresponding subsegments associated to a trace summary error.
    """
    
    exceptions: Optional[list[shared_rootcauseexception.RootCauseException]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Exceptions') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    remote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Remote') }})
    
