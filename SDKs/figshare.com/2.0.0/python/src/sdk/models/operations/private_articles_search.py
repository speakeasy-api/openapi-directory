import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import privatearticlesearch as shared_privatearticlesearch
from ..shared import article as shared_article
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticlesSearchSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticlesSearchRequest:
    request: shared_privatearticlesearch.PrivateArticleSearch = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateArticlesSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticlesSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[shared_article.Article]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
