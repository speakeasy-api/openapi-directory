import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvaluesource_enum as shared_dimensionvaluesource_enum


@dataclass_json
@dataclasses.dataclass
class CloudWatchDimensionConfiguration:
    r"""CloudWatchDimensionConfiguration
    An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
    """
    
    default_dimension_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultDimensionValue') }})
    dimension_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionName') }})
    dimension_value_source: shared_dimensionvaluesource_enum.DimensionValueSourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionValueSource') }})
    
