import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uploadstatus as shared_uploadstatus


@dataclass_json
@dataclasses.dataclass
class UploadStatuses:
    results: list[shared_uploadstatus.UploadStatus] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
