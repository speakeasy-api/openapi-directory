import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyphrasesdetectionjobproperties as shared_keyphrasesdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class DescribeKeyPhrasesDetectionJobResponse:
    key_phrases_detection_job_properties: Optional[shared_keyphrasesdetectionjobproperties.KeyPhrasesDetectionJobProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPhrasesDetectionJobProperties') }})
    
