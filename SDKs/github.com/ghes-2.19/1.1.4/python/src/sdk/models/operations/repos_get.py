import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import full_repository as shared_full_repository


@dataclasses.dataclass
class ReposGetPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetRequest:
    path_params: ReposGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    full_repository: Optional[shared_full_repository.FullRepository] = dataclasses.field(default=None)
    
