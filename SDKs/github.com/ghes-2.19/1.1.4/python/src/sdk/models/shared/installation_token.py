import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository


@dataclass_json
@dataclasses.dataclass
class InstallationTokenPermissions:
    contents: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    issues: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    single_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file') }})
    
class InstallationTokenRepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclasses.dataclass
class InstallationToken:
    r"""InstallationToken
    Authentication token for a GitHub App installed on a user or org.
    """
    
    expires_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    has_multiple_single_files: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_multiple_single_files') }})
    permissions: Optional[InstallationTokenPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    repositories: Optional[list[shared_repository.Repository]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    repository_selection: Optional[InstallationTokenRepositorySelectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_selection') }})
    single_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file') }})
    single_file_paths: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file_paths') }})
    
