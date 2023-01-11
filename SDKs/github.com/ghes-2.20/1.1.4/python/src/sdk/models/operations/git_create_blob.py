import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import short_blob as shared_short_blob
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class GitCreateBlobPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GitCreateBlobRequestBody:
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    encoding: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    

@dataclasses.dataclass
class GitCreateBlobRequest:
    path_params: GitCreateBlobPathParams = dataclasses.field()
    request: Optional[GitCreateBlobRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GitCreateBlobResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    short_blob: Optional[shared_short_blob.ShortBlob] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
