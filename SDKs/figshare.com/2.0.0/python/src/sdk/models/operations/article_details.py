import dataclasses
from typing import Optional
from ..shared import articlecomplete as shared_articlecomplete


@dataclasses.dataclass
class ArticleDetailsPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArticleDetailsRequest:
    path_params: ArticleDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ArticleDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_complete: Optional[shared_articlecomplete.ArticleComplete] = dataclasses.field(default=None)
    
