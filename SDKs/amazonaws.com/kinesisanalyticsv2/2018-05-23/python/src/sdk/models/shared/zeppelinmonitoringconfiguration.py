import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loglevel_enum as shared_loglevel_enum


@dataclass_json
@dataclasses.dataclass
class ZeppelinMonitoringConfiguration:
    r"""ZeppelinMonitoringConfiguration
    Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html\">Monitoring</a>.
    """
    
    log_level: shared_loglevel_enum.LogLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    
