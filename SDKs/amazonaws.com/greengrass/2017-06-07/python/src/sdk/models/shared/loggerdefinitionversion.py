import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logger as shared_logger


@dataclass_json
@dataclasses.dataclass
class LoggerDefinitionVersion:
    r"""LoggerDefinitionVersion
    Information about a logger definition version.
    """
    
    loggers: Optional[list[shared_logger.Logger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Loggers') }})
    
