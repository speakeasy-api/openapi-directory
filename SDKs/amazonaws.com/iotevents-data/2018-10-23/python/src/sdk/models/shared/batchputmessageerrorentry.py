import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorcode_enum as shared_errorcode_enum


@dataclass_json
@dataclasses.dataclass
class BatchPutMessageErrorEntry:
    r"""BatchPutMessageErrorEntry
    Contains information about the errors encountered.
    """
    
    error_code: Optional[shared_errorcode_enum.ErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    
