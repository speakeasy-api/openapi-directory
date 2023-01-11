import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributedimension as shared_attributedimension
from ..shared import segmentbehaviors as shared_segmentbehaviors
from ..shared import segmentdemographics as shared_segmentdemographics
from ..shared import segmentlocation as shared_segmentlocation
from ..shared import metricdimension as shared_metricdimension
from ..shared import eventcondition as shared_eventcondition
from ..shared import segmentcondition as shared_segmentcondition


@dataclass_json
@dataclasses.dataclass
class SimpleConditionSegmentDimensions:
    r"""SimpleConditionSegmentDimensions
    The dimension settings for the segment that's associated with the activity.
    """
    
    attributes: Optional[dict[str, shared_attributedimension.AttributeDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    behavior: Optional[shared_segmentbehaviors.SegmentBehaviors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Behavior') }})
    demographic: Optional[shared_segmentdemographics.SegmentDemographics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Demographic') }})
    location: Optional[shared_segmentlocation.SegmentLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    metrics: Optional[dict[str, shared_metricdimension.MetricDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    user_attributes: Optional[dict[str, shared_attributedimension.AttributeDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    

@dataclass_json
@dataclasses.dataclass
class SimpleCondition:
    r"""SimpleCondition
    Specifies a condition to evaluate for an activity in a journey.
    """
    
    event_condition: Optional[shared_eventcondition.EventCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventCondition') }})
    segment_condition: Optional[shared_segmentcondition.SegmentCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentCondition') }})
    segment_dimensions: Optional[SimpleConditionSegmentDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentDimensions') }})
    
