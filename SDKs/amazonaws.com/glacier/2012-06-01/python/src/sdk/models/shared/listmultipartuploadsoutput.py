import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uploadlistelement as shared_uploadlistelement


@dataclass_json
@dataclasses.dataclass
class ListMultipartUploadsOutput:
    r"""ListMultipartUploadsOutput
    Contains the Amazon S3 Glacier response to your request.
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    uploads_list: Optional[list[shared_uploadlistelement.UploadListElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UploadsList') }})
    
