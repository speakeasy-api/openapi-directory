import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyphrasesdetectionjobproperties as shared_keyphrasesdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class ListKeyPhrasesDetectionJobsResponse:
    key_phrases_detection_job_properties_list: Optional[list[shared_keyphrasesdetectionjobproperties.KeyPhrasesDetectionJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPhrasesDetectionJobPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
