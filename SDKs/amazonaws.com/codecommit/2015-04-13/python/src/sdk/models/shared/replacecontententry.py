import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filemodetypeenum_enum as shared_filemodetypeenum_enum
from ..shared import replacementtypeenum_enum as shared_replacementtypeenum_enum


@dataclass_json
@dataclasses.dataclass
class ReplaceContentEntry:
    r"""ReplaceContentEntry
    Information about a replacement content entry in the conflict of a merge or pull request operation.
    """
    
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    replacement_type: shared_replacementtypeenum_enum.ReplacementTypeEnumEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementType') }})
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    file_mode: Optional[shared_filemodetypeenum_enum.FileModeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    
