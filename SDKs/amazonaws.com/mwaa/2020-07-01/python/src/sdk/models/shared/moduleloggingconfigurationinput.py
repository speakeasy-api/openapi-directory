import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logginglevel_enum as shared_logginglevel_enum


@dataclass_json
@dataclasses.dataclass
class ModuleLoggingConfigurationInput:
    r"""ModuleLoggingConfigurationInput
    Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    log_level: shared_logginglevel_enum.LoggingLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    
