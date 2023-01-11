import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filemodetypeenum_enum as shared_filemodetypeenum_enum


@dataclass_json
@dataclasses.dataclass
class SetFileModeEntry:
    r"""SetFileModeEntry
    Information about the file mode changes.
    """
    
    file_mode: shared_filemodetypeenum_enum.FileModeTypeEnumEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    
