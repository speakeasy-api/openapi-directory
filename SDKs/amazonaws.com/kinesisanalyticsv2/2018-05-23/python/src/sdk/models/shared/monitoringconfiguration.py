import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationtype_enum as shared_configurationtype_enum
from ..shared import loglevel_enum as shared_loglevel_enum
from ..shared import metricslevel_enum as shared_metricslevel_enum


@dataclass_json
@dataclasses.dataclass
class MonitoringConfiguration:
    r"""MonitoringConfiguration
    Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html\">Monitoring</a>.
    """
    
    configuration_type: shared_configurationtype_enum.ConfigurationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    log_level: Optional[shared_loglevel_enum.LogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    metrics_level: Optional[shared_metricslevel_enum.MetricsLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricsLevel') }})
    
