import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentimentdetectionjobproperties as shared_sentimentdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class ListSentimentDetectionJobsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sentiment_detection_job_properties_list: Optional[list[shared_sentimentdetectionjobproperties.SentimentDetectionJobProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SentimentDetectionJobPropertiesList') }})
    
