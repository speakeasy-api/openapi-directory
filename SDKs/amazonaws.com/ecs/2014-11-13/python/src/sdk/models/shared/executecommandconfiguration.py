import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executecommandlogconfiguration as shared_executecommandlogconfiguration
from ..shared import executecommandlogging_enum as shared_executecommandlogging_enum


@dataclass_json
@dataclasses.dataclass
class ExecuteCommandConfiguration:
    r"""ExecuteCommandConfiguration
    The details of the execute command configuration.
    """
    
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyId') }})
    log_configuration: Optional[shared_executecommandlogconfiguration.ExecuteCommandLogConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfiguration') }})
    logging: Optional[shared_executecommandlogging_enum.ExecuteCommandLoggingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    
