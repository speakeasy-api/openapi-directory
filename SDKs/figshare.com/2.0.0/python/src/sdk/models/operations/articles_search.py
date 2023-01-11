import dataclasses
from typing import Optional
from ..shared import articlesearch as shared_articlesearch
from ..shared import article as shared_article


@dataclasses.dataclass
class ArticlesSearchRequest:
    request: Optional[shared_articlesearch.ArticleSearch] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ArticlesSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[shared_article.Article]] = dataclasses.field(default=None)
    
