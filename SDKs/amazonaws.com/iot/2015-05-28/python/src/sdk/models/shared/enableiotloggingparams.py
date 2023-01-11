import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loglevel_enum as shared_loglevel_enum


@dataclass_json
@dataclasses.dataclass
class EnableIoTLoggingParams:
    r"""EnableIoTLoggingParams
    Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.
    """
    
    log_level: shared_loglevel_enum.LogLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    role_arn_for_logging: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArnForLogging') }})
    
