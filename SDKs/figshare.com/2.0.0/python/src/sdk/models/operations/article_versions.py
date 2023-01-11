import dataclasses
from typing import Optional
from ..shared import articleversions as shared_articleversions


@dataclasses.dataclass
class ArticleVersionsPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArticleVersionsRequest:
    path_params: ArticleVersionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ArticleVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_versions: Optional[list[shared_articleversions.ArticleVersions]] = dataclasses.field(default=None)
    
