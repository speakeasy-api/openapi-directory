import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchreadexceptiontype_enum as shared_batchreadexceptiontype_enum


@dataclass_json
@dataclasses.dataclass
class BatchReadException:
    r"""BatchReadException
    The batch read exception structure, which contains the exception type and message.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    type: Optional[shared_batchreadexceptiontype_enum.BatchReadExceptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
