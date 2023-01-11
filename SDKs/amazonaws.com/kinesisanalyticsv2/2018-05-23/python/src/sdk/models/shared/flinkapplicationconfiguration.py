import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import checkpointconfiguration as shared_checkpointconfiguration
from ..shared import monitoringconfiguration as shared_monitoringconfiguration
from ..shared import parallelismconfiguration as shared_parallelismconfiguration


@dataclass_json
@dataclasses.dataclass
class FlinkApplicationConfiguration:
    r"""FlinkApplicationConfiguration
    Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
    """
    
    checkpoint_configuration: Optional[shared_checkpointconfiguration.CheckpointConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfiguration') }})
    monitoring_configuration: Optional[shared_monitoringconfiguration.MonitoringConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfiguration') }})
    parallelism_configuration: Optional[shared_parallelismconfiguration.ParallelismConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismConfiguration') }})
    
