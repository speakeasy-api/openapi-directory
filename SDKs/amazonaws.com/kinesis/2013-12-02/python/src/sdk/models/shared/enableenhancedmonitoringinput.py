import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricsname_enum as shared_metricsname_enum


@dataclass_json
@dataclasses.dataclass
class EnableEnhancedMonitoringInput:
    r"""EnableEnhancedMonitoringInput
    Represents the input for <a>EnableEnhancedMonitoring</a>.
    """
    
    shard_level_metrics: list[shared_metricsname_enum.MetricsNameEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardLevelMetrics') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
