import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import upload as shared_upload


@dataclass_json
@dataclasses.dataclass
class ListUploadsResult:
    r"""ListUploadsResult
    Represents the result of a list uploads request.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    uploads: Optional[list[shared_upload.Upload]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploads') }})
    
