import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topicsdetectionjobproperties as shared_topicsdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class ListTopicsDetectionJobsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    topics_detection_job_properties_list: Optional[list[shared_topicsdetectionjobproperties.TopicsDetectionJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicsDetectionJobPropertiesList') }})
    
