import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loglevel_enum as shared_loglevel_enum


@dataclass_json
@dataclasses.dataclass
class ZeppelinMonitoringConfigurationDescription:
    r"""ZeppelinMonitoringConfigurationDescription
    The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
    """
    
    log_level: Optional[shared_loglevel_enum.LogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    
