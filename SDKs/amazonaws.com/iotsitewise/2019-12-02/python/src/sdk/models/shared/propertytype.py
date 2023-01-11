import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute
from ..shared import measurement as shared_measurement
from ..shared import metric as shared_metric
from ..shared import transform as shared_transform


@dataclass_json
@dataclasses.dataclass
class PropertyType:
    r"""PropertyType
    Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
    """
    
    attribute: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    measurement: Optional[shared_measurement.Measurement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement') }})
    metric: Optional[shared_metric.Metric] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    transform: Optional[shared_transform.Transform] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transform') }})
    
