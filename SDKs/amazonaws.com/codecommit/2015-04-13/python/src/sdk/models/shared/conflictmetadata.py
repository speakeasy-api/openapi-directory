import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filemodes as shared_filemodes
from ..shared import filesizes as shared_filesizes
from ..shared import isbinaryfile as shared_isbinaryfile
from ..shared import mergeoperations as shared_mergeoperations
from ..shared import objecttypes as shared_objecttypes


@dataclass_json
@dataclasses.dataclass
class ConflictMetadata:
    r"""ConflictMetadata
    Information about the metadata for a conflict in a merge operation.
    """
    
    content_conflict: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentConflict') }})
    file_mode_conflict: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileModeConflict') }})
    file_modes: Optional[shared_filemodes.FileModes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileModes') }})
    file_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    file_sizes: Optional[shared_filesizes.FileSizes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSizes') }})
    is_binary_file: Optional[shared_isbinaryfile.IsBinaryFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBinaryFile') }})
    merge_operations: Optional[shared_mergeoperations.MergeOperations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeOperations') }})
    number_of_conflicts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfConflicts') }})
    object_type_conflict: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypeConflict') }})
    object_types: Optional[shared_objecttypes.ObjectTypes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    
