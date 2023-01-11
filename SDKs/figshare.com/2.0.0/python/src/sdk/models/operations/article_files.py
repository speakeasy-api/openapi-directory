import dataclasses
from typing import Optional
from ..shared import publicfile as shared_publicfile


@dataclasses.dataclass
class ArticleFilesPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArticleFilesRequest:
    path_params: ArticleFilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ArticleFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_files: Optional[list[shared_publicfile.PublicFile]] = dataclasses.field(default=None)
    
