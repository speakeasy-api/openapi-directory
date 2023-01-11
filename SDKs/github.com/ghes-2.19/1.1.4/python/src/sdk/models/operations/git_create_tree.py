import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import git_tree as shared_git_tree
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GitCreateTreePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class GitCreateTreeRequestBodyTreeModeEnum(str, Enum):
    ONE_HUNDRED_THOUSAND_SIX_HUNDRED_AND_FORTY_FOUR = "100644"
    ONE_HUNDRED_THOUSAND_SEVEN_HUNDRED_AND_FIFTY_FIVE = "100755"
    FORTY_THOUSAND = "040000"
    ONE_HUNDRED_AND_SIXTY_THOUSAND = "160000"
    ONE_HUNDRED_AND_TWENTY_THOUSAND = "120000"

class GitCreateTreeRequestBodyTreeTypeEnum(str, Enum):
    BLOB = "blob"
    TREE = "tree"
    COMMIT = "commit"


@dataclass_json
@dataclasses.dataclass
class GitCreateTreeRequestBodyTree:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    mode: Optional[GitCreateTreeRequestBodyTreeModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sha: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    type: Optional[GitCreateTreeRequestBodyTreeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GitCreateTreeRequestBody:
    tree: list[GitCreateTreeRequestBodyTree] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tree') }})
    base_tree: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_tree') }})
    

@dataclasses.dataclass
class GitCreateTreeRequest:
    path_params: GitCreateTreePathParams = dataclasses.field()
    request: Optional[GitCreateTreeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GitCreateTreeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    git_tree: Optional[shared_git_tree.GitTree] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
