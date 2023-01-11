import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchwriteexceptiontype_enum as shared_batchwriteexceptiontype_enum


@dataclass_json
@dataclasses.dataclass
class BatchWriteException:
    r"""BatchWriteException
    A <code>BatchWrite</code> exception has occurred.
    """
    
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    type: Optional[shared_batchwriteexceptiontype_enum.BatchWriteExceptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
