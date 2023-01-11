import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filemodetypeenum_enum as shared_filemodetypeenum_enum


@dataclass_json
@dataclasses.dataclass
class FileMetadata:
    r"""FileMetadata
    A file to be added, updated, or deleted as part of a commit.
    """
    
    absolute_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absolutePath') }})
    blob_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    file_mode: Optional[shared_filemodetypeenum_enum.FileModeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    
