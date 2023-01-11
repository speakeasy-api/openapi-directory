import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorcode_enum as shared_errorcode_enum


@dataclass_json
@dataclasses.dataclass
class UnprocessedAccount:
    r"""UnprocessedAccount
     <p>Provides information about an account-related request that hasn't been processed.</p>
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    error_code: Optional[shared_errorcode_enum.ErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    
