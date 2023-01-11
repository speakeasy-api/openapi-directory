import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relativefileversionenum_enum as shared_relativefileversionenum_enum


@dataclass_json
@dataclasses.dataclass
class Location:
    r"""Location
    Returns information about the location of a change or comment in the comparison between two commits or a pull request.
    """
    
    file_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    file_position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePosition') }})
    relative_file_version: Optional[shared_relativefileversionenum_enum.RelativeFileVersionEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeFileVersion') }})
    
