import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categories as shared_categories
from ..shared import transcript as shared_transcript


@dataclass_json
@dataclasses.dataclass
class RealtimeContactAnalysisSegment:
    r"""RealtimeContactAnalysisSegment
    An analyzed segment for a real-time analysis session.
    """
    
    categories: Optional[shared_categories.Categories] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Categories') }})
    transcript: Optional[shared_transcript.Transcript] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transcript') }})
    
