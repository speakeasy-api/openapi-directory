import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationrelatedcloudwatchmetricssourcedetail as shared_recommendationrelatedcloudwatchmetricssourcedetail


@dataclass_json
@dataclasses.dataclass
class RecommendationRelatedAnomalySourceDetail:
    r"""RecommendationRelatedAnomalySourceDetail
     Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric. 
    """
    
    cloud_watch_metrics: Optional[list[shared_recommendationrelatedcloudwatchmetricssourcedetail.RecommendationRelatedCloudWatchMetricsSourceDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchMetrics') }})
    
