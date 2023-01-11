import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standardunit_enum as shared_standardunit_enum


@dataclass_json
@dataclasses.dataclass
class MetricTransformation:
    r"""MetricTransformation
    Indicates how to transform ingested log events to metric data in a CloudWatch metric.
    """
    
    metric_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    metric_namespace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNamespace') }})
    metric_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValue') }})
    default_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    dimensions: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    unit: Optional[shared_standardunit_enum.StandardUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
