import dataclasses
from typing import Optional
from ..shared import articleembargo as shared_articleembargo


@dataclasses.dataclass
class ArticleVersionEmbargoPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    v_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'v_number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArticleVersionEmbargoRequest:
    path_params: ArticleVersionEmbargoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ArticleVersionEmbargoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_embargo: Optional[shared_articleembargo.ArticleEmbargo] = dataclasses.field(default=None)
    
