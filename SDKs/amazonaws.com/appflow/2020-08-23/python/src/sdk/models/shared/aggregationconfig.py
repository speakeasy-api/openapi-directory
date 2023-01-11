import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregationtype_enum as shared_aggregationtype_enum


@dataclass_json
@dataclasses.dataclass
class AggregationConfig:
    r"""AggregationConfig
     The aggregation settings that you can use to customize the output format of your flow data. 
    """
    
    aggregation_type: Optional[shared_aggregationtype_enum.AggregationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationType') }})
    
