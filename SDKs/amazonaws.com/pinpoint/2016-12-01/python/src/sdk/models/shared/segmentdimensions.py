import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributedimension as shared_attributedimension
from ..shared import segmentbehaviors as shared_segmentbehaviors
from ..shared import segmentdemographics as shared_segmentdemographics
from ..shared import segmentlocation as shared_segmentlocation
from ..shared import metricdimension as shared_metricdimension


@dataclass_json
@dataclasses.dataclass
class SegmentDimensions:
    r"""SegmentDimensions
    Specifies the dimension settings for a segment.
    """
    
    attributes: Optional[dict[str, shared_attributedimension.AttributeDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    behavior: Optional[shared_segmentbehaviors.SegmentBehaviors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Behavior') }})
    demographic: Optional[shared_segmentdemographics.SegmentDemographics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Demographic') }})
    location: Optional[shared_segmentlocation.SegmentLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    metrics: Optional[dict[str, shared_metricdimension.MetricDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    user_attributes: Optional[dict[str, shared_attributedimension.AttributeDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributes') }})
    
