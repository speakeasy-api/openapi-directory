import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import porter_author as shared_porter_author


@dataclasses.dataclass
class MigrationsGetCommitAuthorsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MigrationsGetCommitAuthorsQueryParams:
    since: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MigrationsGetCommitAuthorsRequest:
    path_params: MigrationsGetCommitAuthorsPathParams = dataclasses.field()
    query_params: MigrationsGetCommitAuthorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MigrationsGetCommitAuthorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    porter_authors: Optional[list[shared_porter_author.PorterAuthor]] = dataclasses.field(default=None)
    
