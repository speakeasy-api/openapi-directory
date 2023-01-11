import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filemodetypeenum_enum as shared_filemodetypeenum_enum


@dataclass_json
@dataclasses.dataclass
class FileModes:
    r"""FileModes
    Information about file modes in a merge or pull request.
    """
    
    base: Optional[shared_filemodetypeenum_enum.FileModeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    destination: Optional[shared_filemodetypeenum_enum.FileModeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: Optional[shared_filemodetypeenum_enum.FileModeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
