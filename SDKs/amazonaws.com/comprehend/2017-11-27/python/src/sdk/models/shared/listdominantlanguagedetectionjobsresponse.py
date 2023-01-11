import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dominantlanguagedetectionjobproperties as shared_dominantlanguagedetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class ListDominantLanguageDetectionJobsResponse:
    dominant_language_detection_job_properties_list: Optional[list[shared_dominantlanguagedetectionjobproperties.DominantLanguageDetectionJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DominantLanguageDetectionJobPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
