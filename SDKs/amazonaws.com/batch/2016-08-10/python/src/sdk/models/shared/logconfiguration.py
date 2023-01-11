import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logdriver_enum as shared_logdriver_enum
from ..shared import secret as shared_secret


@dataclass_json
@dataclasses.dataclass
class LogConfiguration:
    r"""LogConfiguration
    Log configuration options to send to a custom log driver for the container.
    """
    
    log_driver: shared_logdriver_enum.LogDriverEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDriver') }})
    options: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret_options: Optional[list[shared_secret.Secret]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretOptions') }})
    
