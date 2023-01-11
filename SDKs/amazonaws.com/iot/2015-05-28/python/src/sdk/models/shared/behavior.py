import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import behaviorcriteria as shared_behaviorcriteria
from ..shared import metricdimension as shared_metricdimension


@dataclass_json
@dataclasses.dataclass
class Behavior:
    r"""Behavior
    A Device Defender security profile behavior.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    criteria: Optional[shared_behaviorcriteria.BehaviorCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    metric: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    metric_dimension: Optional[shared_metricdimension.MetricDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricDimension') }})
    suppress_alerts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressAlerts') }})
    
