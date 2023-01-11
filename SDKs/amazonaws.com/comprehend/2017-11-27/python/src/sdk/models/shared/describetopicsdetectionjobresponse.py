import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topicsdetectionjobproperties as shared_topicsdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class DescribeTopicsDetectionJobResponse:
    topics_detection_job_properties: Optional[shared_topicsdetectionjobproperties.TopicsDetectionJobProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicsDetectionJobProperties') }})
    
