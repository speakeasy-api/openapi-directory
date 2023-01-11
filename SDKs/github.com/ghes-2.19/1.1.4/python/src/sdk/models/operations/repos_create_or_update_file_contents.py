import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import file_commit as shared_file_commit
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposCreateOrUpdateFileContentsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateOrUpdateFileContentsRequestBodyAuthor:
    r"""ReposCreateOrUpdateFileContentsRequestBodyAuthor
    The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateOrUpdateFileContentsRequestBodyCommitter:
    r"""ReposCreateOrUpdateFileContentsRequestBodyCommitter
    The person that committed the file. Default: the authenticated user.
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreateOrUpdateFileContentsRequestBody:
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    author: Optional[ReposCreateOrUpdateFileContentsRequestBodyAuthor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    committer: Optional[ReposCreateOrUpdateFileContentsRequestBodyCommitter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committer') }})
    sha: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    

@dataclasses.dataclass
class ReposCreateOrUpdateFileContentsRequest:
    path_params: ReposCreateOrUpdateFileContentsPathParams = dataclasses.field()
    request: Optional[ReposCreateOrUpdateFileContentsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreateOrUpdateFileContentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    file_commit: Optional[shared_file_commit.FileCommit] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
