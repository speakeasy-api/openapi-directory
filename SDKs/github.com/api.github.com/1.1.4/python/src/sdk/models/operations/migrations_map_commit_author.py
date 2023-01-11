import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import porter_author as shared_porter_author
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class MigrationsMapCommitAuthorPathParams:
    author_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'author_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class MigrationsMapCommitAuthorRequestBody:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    remote_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_id') }})
    

@dataclasses.dataclass
class MigrationsMapCommitAuthorRequest:
    path_params: MigrationsMapCommitAuthorPathParams = dataclasses.field()
    request: Optional[MigrationsMapCommitAuthorRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MigrationsMapCommitAuthorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    porter_author: Optional[shared_porter_author.PorterAuthor] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
