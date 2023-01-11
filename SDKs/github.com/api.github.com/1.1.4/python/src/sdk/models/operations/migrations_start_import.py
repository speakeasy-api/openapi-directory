import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import import_ as shared_import_
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class MigrationsStartImportPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class MigrationsStartImportRequestBodyVcsEnum(str, Enum):
    SUBVERSION = "subversion"
    GIT = "git"
    MERCURIAL = "mercurial"
    TFVC = "tfvc"


@dataclass_json
@dataclasses.dataclass
class MigrationsStartImportRequestBody:
    vcs_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_url') }})
    tfvc_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfvc_project') }})
    vcs: Optional[MigrationsStartImportRequestBodyVcsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs') }})
    vcs_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_password') }})
    vcs_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_username') }})
    

@dataclasses.dataclass
class MigrationsStartImportRequest:
    path_params: MigrationsStartImportPathParams = dataclasses.field()
    request: Optional[MigrationsStartImportRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MigrationsStartImportResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    import_: Optional[shared_import_.Import] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
