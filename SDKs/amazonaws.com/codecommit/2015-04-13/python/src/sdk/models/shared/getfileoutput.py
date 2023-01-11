import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filemodetypeenum_enum as shared_filemodetypeenum_enum


@dataclass_json
@dataclasses.dataclass
class GetFileOutput:
    blob_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    file_content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileContent') }})
    file_mode: shared_filemodetypeenum_enum.FileModeTypeEnumEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    file_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSize') }})
    
