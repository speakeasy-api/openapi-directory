import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import checkpointconfigurationupdate as shared_checkpointconfigurationupdate
from ..shared import monitoringconfigurationupdate as shared_monitoringconfigurationupdate
from ..shared import parallelismconfigurationupdate as shared_parallelismconfigurationupdate


@dataclass_json
@dataclasses.dataclass
class FlinkApplicationConfigurationUpdate:
    r"""FlinkApplicationConfigurationUpdate
    Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.
    """
    
    checkpoint_configuration_update: Optional[shared_checkpointconfigurationupdate.CheckpointConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointConfigurationUpdate') }})
    monitoring_configuration_update: Optional[shared_monitoringconfigurationupdate.MonitoringConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringConfigurationUpdate') }})
    parallelism_configuration_update: Optional[shared_parallelismconfigurationupdate.ParallelismConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismConfigurationUpdate') }})
    
