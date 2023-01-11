import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationrestoreconfiguration as shared_applicationrestoreconfiguration
from ..shared import flinkrunconfiguration as shared_flinkrunconfiguration
from ..shared import sqlrunconfiguration as shared_sqlrunconfiguration


@dataclass_json
@dataclasses.dataclass
class RunConfiguration:
    r"""RunConfiguration
    Describes the starting parameters for an Kinesis Data Analytics application.
    """
    
    application_restore_configuration: Optional[shared_applicationrestoreconfiguration.ApplicationRestoreConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationRestoreConfiguration') }})
    flink_run_configuration: Optional[shared_flinkrunconfiguration.FlinkRunConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkRunConfiguration') }})
    sql_run_configurations: Optional[list[shared_sqlrunconfiguration.SQLRunConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlRunConfigurations') }})
    
