import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationrestoreconfiguration as shared_applicationrestoreconfiguration
from ..shared import flinkrunconfiguration as shared_flinkrunconfiguration


@dataclass_json
@dataclasses.dataclass
class RunConfigurationDescription:
    r"""RunConfigurationDescription
    Describes the starting properties for a Kinesis Data Analytics application.
    """
    
    application_restore_configuration_description: Optional[shared_applicationrestoreconfiguration.ApplicationRestoreConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationRestoreConfigurationDescription') }})
    flink_run_configuration_description: Optional[shared_flinkrunconfiguration.FlinkRunConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkRunConfigurationDescription') }})
    
