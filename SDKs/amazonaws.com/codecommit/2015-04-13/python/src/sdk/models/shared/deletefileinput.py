import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteFileInput:
    branch_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    parent_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentCommitId') }})
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    commit_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitMessage') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    keep_empty_folders: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepEmptyFolders') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
