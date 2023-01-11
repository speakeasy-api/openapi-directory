import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationtype_enum as shared_configurationtype_enum
from ..shared import loglevel_enum as shared_loglevel_enum
from ..shared import metricslevel_enum as shared_metricslevel_enum


@dataclass_json
@dataclasses.dataclass
class MonitoringConfigurationUpdate:
    r"""MonitoringConfigurationUpdate
    Describes updates to configuration parameters for Amazon CloudWatch logging for an application.
    """
    
    configuration_type_update: Optional[shared_configurationtype_enum.ConfigurationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationTypeUpdate') }})
    log_level_update: Optional[shared_loglevel_enum.LogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevelUpdate') }})
    metrics_level_update: Optional[shared_metricslevel_enum.MetricsLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricsLevelUpdate') }})
    
