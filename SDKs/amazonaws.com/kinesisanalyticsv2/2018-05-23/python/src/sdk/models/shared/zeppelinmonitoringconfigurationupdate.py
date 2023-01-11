import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loglevel_enum as shared_loglevel_enum


@dataclass_json
@dataclasses.dataclass
class ZeppelinMonitoringConfigurationUpdate:
    r"""ZeppelinMonitoringConfigurationUpdate
    Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
    """
    
    log_level_update: shared_loglevel_enum.LogLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevelUpdate') }})
    
