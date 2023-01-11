import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import article as shared_article
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticlesListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PrivateArticlesListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticlesListRequest:
    query_params: PrivateArticlesListQueryParams = dataclasses.field()
    security: PrivateArticlesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticlesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[shared_article.Article]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
