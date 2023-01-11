import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import upload as shared_upload


@dataclass_json
@dataclasses.dataclass
class CreateUploadResult:
    r"""CreateUploadResult
    Represents the result of a create upload request.
    """
    
    upload: Optional[shared_upload.Upload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    
