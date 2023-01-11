import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributedimension as shared_attributedimension
from ..shared import setdimension as shared_setdimension
from ..shared import metricdimension as shared_metricdimension


@dataclass_json
@dataclasses.dataclass
class EventDimensions:
    r"""EventDimensions
    Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
    """
    
    attributes: Optional[dict[str, shared_attributedimension.AttributeDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    event_type: Optional[shared_setdimension.SetDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    metrics: Optional[dict[str, shared_metricdimension.MetricDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    
