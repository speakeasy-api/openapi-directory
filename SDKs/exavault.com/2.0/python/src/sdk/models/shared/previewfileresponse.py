import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import previewfile as shared_previewfile


@dataclass_json
@dataclasses.dataclass
class PreviewFileResponse:
    r"""PreviewFileResponse
    Response object for preview file
    """
    
    data: Optional[shared_previewfile.PreviewFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    response_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseStatus') }})
    
