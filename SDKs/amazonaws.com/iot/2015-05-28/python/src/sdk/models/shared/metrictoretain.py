import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricdimension as shared_metricdimension


@dataclass_json
@dataclasses.dataclass
class MetricToRetain:
    r"""MetricToRetain
    The metric you want to retain. Dimensions are optional.
    """
    
    metric: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    metric_dimension: Optional[shared_metricdimension.MetricDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricDimension') }})
    
