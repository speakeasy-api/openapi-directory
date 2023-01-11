import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectorsummary as shared_detectorsummary


@dataclass_json
@dataclasses.dataclass
class ListDetectorsResponse:
    detector_summaries: Optional[list[shared_detectorsummary.DetectorSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
