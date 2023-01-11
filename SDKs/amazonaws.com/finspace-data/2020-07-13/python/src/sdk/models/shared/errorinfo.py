import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorcategory_enum as shared_errorcategory_enum


@dataclass_json
@dataclasses.dataclass
class ErrorInfo:
    r"""ErrorInfo
    Error message.
    """
    
    error_category: Optional[shared_errorcategory_enum.ErrorCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCategory') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    
