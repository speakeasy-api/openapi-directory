import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricsname_enum as shared_metricsname_enum


@dataclass_json
@dataclasses.dataclass
class EnhancedMetrics:
    r"""EnhancedMetrics
    Represents enhanced metrics types.
    """
    
    shard_level_metrics: Optional[list[shared_metricsname_enum.MetricsNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardLevelMetrics') }})
    
