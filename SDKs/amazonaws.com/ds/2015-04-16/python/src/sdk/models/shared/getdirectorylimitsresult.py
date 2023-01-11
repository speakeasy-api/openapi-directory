import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directorylimits as shared_directorylimits


@dataclass_json
@dataclasses.dataclass
class GetDirectoryLimitsResult:
    r"""GetDirectoryLimitsResult
    Contains the results of the <a>GetDirectoryLimits</a> operation.
    """
    
    directory_limits: Optional[shared_directorylimits.DirectoryLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryLimits') }})
    
