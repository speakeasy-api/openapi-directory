import dataclasses
from typing import Optional
from ..shared import filecommententity as shared_filecommententity


@dataclasses.dataclass
class FileCommentListForPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileCommentListForPathQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FileCommentListForPathRequest:
    path_params: FileCommentListForPathPathParams = dataclasses.field()
    query_params: FileCommentListForPathQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FileCommentListForPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_comment_entities: Optional[list[shared_filecommententity.FileCommentEntity]] = dataclasses.field(default=None)
    
