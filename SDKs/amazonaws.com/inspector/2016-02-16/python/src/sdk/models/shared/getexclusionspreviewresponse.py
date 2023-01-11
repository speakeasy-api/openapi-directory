import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exclusionpreview as shared_exclusionpreview
from ..shared import previewstatus_enum as shared_previewstatus_enum


@dataclass_json
@dataclasses.dataclass
class GetExclusionsPreviewResponse:
    preview_status: shared_previewstatus_enum.PreviewStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewStatus') }})
    exclusion_previews: Optional[list[shared_exclusionpreview.ExclusionPreview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionPreviews') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
