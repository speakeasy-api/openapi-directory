import dataclasses
from typing import Any,Optional
from ..shared import basic_error as shared_basic_error
from ..shared import content_directory as shared_content_directory
from ..shared import content_file as shared_content_file
from ..shared import content_symlink as shared_content_symlink
from ..shared import content_submodule as shared_content_submodule


@dataclasses.dataclass
class ReposGetContentPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetContentQueryParams:
    ref: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposGetContentRequest:
    path_params: ReposGetContentPathParams = dataclasses.field()
    query_params: ReposGetContentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    repos_get_content_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
