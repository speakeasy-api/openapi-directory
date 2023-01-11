import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dominantlanguagedetectionjobproperties as shared_dominantlanguagedetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class DescribeDominantLanguageDetectionJobResponse:
    dominant_language_detection_job_properties: Optional[shared_dominantlanguagedetectionjobproperties.DominantLanguageDetectionJobProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DominantLanguageDetectionJobProperties') }})
    
