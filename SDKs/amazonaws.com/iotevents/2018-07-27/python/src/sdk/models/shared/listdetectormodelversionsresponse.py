import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectormodelversionsummary as shared_detectormodelversionsummary


@dataclass_json
@dataclasses.dataclass
class ListDetectorModelVersionsResponse:
    detector_model_version_summaries: Optional[list[shared_detectormodelversionsummary.DetectorModelVersionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelVersionSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
