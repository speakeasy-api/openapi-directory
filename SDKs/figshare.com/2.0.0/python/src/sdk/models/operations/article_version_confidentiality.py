import dataclasses
from typing import Optional
from ..shared import articleconfidentiality as shared_articleconfidentiality


@dataclasses.dataclass
class ArticleVersionConfidentialityPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    v_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'v_number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ArticleVersionConfidentialityRequest:
    path_params: ArticleVersionConfidentialityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ArticleVersionConfidentialityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_confidentiality: Optional[shared_articleconfidentiality.ArticleConfidentiality] = dataclasses.field(default=None)
    
