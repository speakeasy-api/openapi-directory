import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspreviewsummary as shared_accesspreviewsummary


@dataclass_json
@dataclasses.dataclass
class ListAccessPreviewsResponse:
    access_previews: list[shared_accesspreviewsummary.AccessPreviewSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPreviews') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
