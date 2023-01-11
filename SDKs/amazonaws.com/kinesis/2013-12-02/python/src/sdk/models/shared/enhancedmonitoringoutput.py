import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricsname_enum as shared_metricsname_enum


@dataclass_json
@dataclasses.dataclass
class EnhancedMonitoringOutput:
    r"""EnhancedMonitoringOutput
    Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
    """
    
    current_shard_level_metrics: Optional[list[shared_metricsname_enum.MetricsNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentShardLevelMetrics') }})
    desired_shard_level_metrics: Optional[list[shared_metricsname_enum.MetricsNameEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredShardLevelMetrics') }})
    stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
