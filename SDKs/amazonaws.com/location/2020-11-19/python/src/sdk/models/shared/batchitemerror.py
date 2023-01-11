import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchitemerrorcode_enum as shared_batchitemerrorcode_enum


@dataclass_json
@dataclasses.dataclass
class BatchItemError:
    r"""BatchItemError
    Contains the batch request error details associated with the request.
    """
    
    code: Optional[shared_batchitemerrorcode_enum.BatchItemErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
