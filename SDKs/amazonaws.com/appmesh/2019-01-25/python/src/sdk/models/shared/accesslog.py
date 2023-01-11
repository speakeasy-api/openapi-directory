import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fileaccesslog as shared_fileaccesslog


@dataclass_json
@dataclasses.dataclass
class AccessLog:
    r"""AccessLog
    An object that represents the access logging information for a virtual node.
    """
    
    file: Optional[shared_fileaccesslog.FileAccessLog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    
