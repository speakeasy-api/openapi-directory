import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deletefileentry as shared_deletefileentry
from ..shared import putfileentry as shared_putfileentry
from ..shared import setfilemodeentry as shared_setfilemodeentry


@dataclass_json
@dataclasses.dataclass
class CreateCommitInput:
    branch_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    author_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorName') }})
    commit_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitMessage') }})
    delete_files: Optional[list[shared_deletefileentry.DeleteFileEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteFiles') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    keep_empty_folders: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepEmptyFolders') }})
    parent_commit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCommitId') }})
    put_files: Optional[list[shared_putfileentry.PutFileEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('putFiles') }})
    set_file_modes: Optional[list[shared_setfilemodeentry.SetFileModeEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setFileModes') }})
    
