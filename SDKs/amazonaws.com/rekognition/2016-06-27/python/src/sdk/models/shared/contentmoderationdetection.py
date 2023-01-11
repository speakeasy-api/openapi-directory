import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import moderationlabel as shared_moderationlabel


@dataclass_json
@dataclasses.dataclass
class ContentModerationDetection:
    r"""ContentModerationDetection
    Information about an inappropriate, unwanted, or offensive content label detection in a stored video.
    """
    
    moderation_label: Optional[shared_moderationlabel.ModerationLabel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModerationLabel') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
