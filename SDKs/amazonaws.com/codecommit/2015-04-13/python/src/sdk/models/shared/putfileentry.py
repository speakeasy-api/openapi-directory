import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filemodetypeenum_enum as shared_filemodetypeenum_enum
from ..shared import sourcefilespecifier as shared_sourcefilespecifier


@dataclass_json
@dataclasses.dataclass
class PutFileEntry:
    r"""PutFileEntry
    Information about a file added or updated as part of a commit.
    """
    
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    file_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileContent') }})
    file_mode: Optional[shared_filemodetypeenum_enum.FileModeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    source_file: Optional[shared_sourcefilespecifier.SourceFileSpecifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFile') }})
    
