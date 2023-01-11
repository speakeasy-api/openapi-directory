import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retrybuildbatchtype_enum as shared_retrybuildbatchtype_enum


@dataclass_json
@dataclasses.dataclass
class RetryBuildBatchInput:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    retry_type: Optional[shared_retrybuildbatchtype_enum.RetryBuildBatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryType') }})
    
