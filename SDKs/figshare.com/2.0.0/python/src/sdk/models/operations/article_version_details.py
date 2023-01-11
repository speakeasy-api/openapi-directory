import dataclasses
from typing import Optional
from ..shared import articlecomplete as shared_articlecomplete


@dataclasses.dataclass
class ArticleVersionDetailsPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    v_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'v_number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArticleVersionDetailsRequest:
    path_params: ArticleVersionDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ArticleVersionDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_complete: Optional[shared_articlecomplete.ArticleComplete] = dataclasses.field(default=None)
    
