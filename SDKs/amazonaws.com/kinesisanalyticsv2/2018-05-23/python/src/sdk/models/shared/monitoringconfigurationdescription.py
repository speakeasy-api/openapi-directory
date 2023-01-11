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
class MonitoringConfigurationDescription:
    r"""MonitoringConfigurationDescription
    Describes configuration parameters for CloudWatch logging for an application.
    """
    
    configuration_type: Optional[shared_configurationtype_enum.ConfigurationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    log_level: Optional[shared_loglevel_enum.LogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    metrics_level: Optional[shared_metricslevel_enum.MetricsLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricsLevel') }})
    
