import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorcode_enum as shared_errorcode_enum


@dataclass_json
@dataclasses.dataclass
class ErrorDetail:
    r"""ErrorDetail
    An object representing an error when an asynchronous operation fails.
    """
    
    error_code: Optional[shared_errorcode_enum.ErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    resource_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIds') }})
    
