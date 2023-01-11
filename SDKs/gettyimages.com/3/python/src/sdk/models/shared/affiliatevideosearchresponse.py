import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autocorrections as shared_autocorrections
from ..shared import affiliatevideo as shared_affiliatevideo


@dataclass_json
@dataclasses.dataclass
class AffiliateVideoSearchResponse:
    auto_corrections: Optional[shared_autocorrections.AutoCorrections] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_corrections') }})
    videos: Optional[list[shared_affiliatevideo.AffiliateVideo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    
