import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvalueoperator_enum as shared_dimensionvalueoperator_enum


@dataclass_json
@dataclasses.dataclass
class MetricDimension:
    r"""MetricDimension
    The dimension of a metric.
    """
    
    dimension_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionName') }})
    operator: Optional[shared_dimensionvalueoperator_enum.DimensionValueOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
