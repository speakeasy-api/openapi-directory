import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationrelatedanomalyresource as shared_recommendationrelatedanomalyresource
from ..shared import recommendationrelatedanomalysourcedetail as shared_recommendationrelatedanomalysourcedetail


@dataclass_json
@dataclasses.dataclass
class RecommendationRelatedAnomaly:
    r"""RecommendationRelatedAnomaly
     Information about an anomaly that is related to a recommendation. 
    """
    
    resources: Optional[list[shared_recommendationrelatedanomalyresource.RecommendationRelatedAnomalyResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    source_details: Optional[list[shared_recommendationrelatedanomalysourcedetail.RecommendationRelatedAnomalySourceDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDetails') }})
    
