import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationrestoreconfiguration as shared_applicationrestoreconfiguration
from ..shared import flinkrunconfiguration as shared_flinkrunconfiguration


@dataclass_json
@dataclasses.dataclass
class RunConfigurationUpdate:
    r"""RunConfigurationUpdate
    Describes the updates to the starting parameters for a Kinesis Data Analytics application.
    """
    
    application_restore_configuration: Optional[shared_applicationrestoreconfiguration.ApplicationRestoreConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationRestoreConfiguration') }})
    flink_run_configuration: Optional[shared_flinkrunconfiguration.FlinkRunConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlinkRunConfiguration') }})
    
