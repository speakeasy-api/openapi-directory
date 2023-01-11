import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import git_tag as shared_git_tag
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GitCreateTagPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GitCreateTagRequestBodyTagger:
    r"""GitCreateTagRequestBodyTagger
    An object with information about the individual creating the tag.
    """
    
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GitCreateTagRequestBodyTypeEnum(str, Enum):
    COMMIT = "commit"
    TREE = "tree"
    BLOB = "blob"


@dataclass_json
@dataclasses.dataclass
class GitCreateTagRequestBody:
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    type: GitCreateTagRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    tagger: Optional[GitCreateTagRequestBodyTagger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagger') }})
    

@dataclasses.dataclass
class GitCreateTagRequest:
    path_params: GitCreateTagPathParams = dataclasses.field()
    request: Optional[GitCreateTagRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GitCreateTagResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    git_tag: Optional[shared_git_tag.GitTag] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
