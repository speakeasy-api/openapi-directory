import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentimentdetectionjobproperties as shared_sentimentdetectionjobproperties


@dataclass_json
@dataclasses.dataclass
class DescribeSentimentDetectionJobResponse:
    sentiment_detection_job_properties: Optional[shared_sentimentdetectionjobproperties.SentimentDetectionJobProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SentimentDetectionJobProperties') }})
    
