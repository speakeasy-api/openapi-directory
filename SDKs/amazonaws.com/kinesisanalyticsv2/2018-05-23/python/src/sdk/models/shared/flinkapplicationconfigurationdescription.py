import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import checkpointconfigurationdescription as shared_checkpointconfigurationdescription
from ..shared import monitoringconfigurationdescription as shared_monitoringconfigurationdescription
from ..shared import parallelismconfigurationdescription as shared_parallelismconfigurationdescription


@dataclass_json
@dataclasses.dataclass
class FlinkApplicationConfigurationDescription:
    r"""FlinkApplicationConfigurationDescription
    Describes configuration parameters for a Flink-based Kinesis Data Analytics application.
    """
    
    checkpoint_configuration_description: Optional[shared_checkpointconfigurationdescription.CheckpointConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfigurationDescription') }})
    job_plan_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobPlanDescription') }})
    monitoring_configuration_description: Optional[shared_monitoringconfigurationdescription.MonitoringConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfigurationDescription') }})
    parallelism_configuration_description: Optional[shared_parallelismconfigurationdescription.ParallelismConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismConfigurationDescription') }})
    
