import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationrelatedanomaly as shared_recommendationrelatedanomaly
from ..shared import recommendationrelatedevent as shared_recommendationrelatedevent


@dataclass_json
@dataclasses.dataclass
class Recommendation:
    r"""Recommendation
     Recommendation information to help you remediate detected anomalous behavior that generated an insight. 
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    related_anomalies: Optional[list[shared_recommendationrelatedanomaly.RecommendationRelatedAnomaly]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedAnomalies') }})
    related_events: Optional[list[shared_recommendationrelatedevent.RecommendationRelatedEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedEvents') }})
    
