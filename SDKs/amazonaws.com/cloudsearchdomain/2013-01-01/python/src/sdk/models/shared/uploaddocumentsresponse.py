import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentservicewarning as shared_documentservicewarning


@dataclass_json
@dataclasses.dataclass
class UploadDocumentsResponse:
    r"""UploadDocumentsResponse
    Contains the response to an <code>UploadDocuments</code> request.
    """
    
    adds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adds') }})
    deletes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletes') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    warnings: Optional[list[shared_documentservicewarning.DocumentServiceWarning]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
