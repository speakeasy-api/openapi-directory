import dataclasses
from typing import Optional
from ..shared import publicfile as shared_publicfile


@dataclasses.dataclass
class ArticleFileDetailsPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    file_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArticleFileDetailsRequest:
    path_params: ArticleFileDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ArticleFileDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_file: Optional[shared_publicfile.PublicFile] = dataclasses.field(default=None)
    
