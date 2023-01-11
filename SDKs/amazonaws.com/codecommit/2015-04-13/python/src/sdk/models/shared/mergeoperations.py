import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changetypeenum_enum as shared_changetypeenum_enum


@dataclass_json
@dataclasses.dataclass
class MergeOperations:
    r"""MergeOperations
    Information about the file operation conflicts in a merge operation.
    """
    
    destination: Optional[shared_changetypeenum_enum.ChangeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: Optional[shared_changetypeenum_enum.ChangeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
