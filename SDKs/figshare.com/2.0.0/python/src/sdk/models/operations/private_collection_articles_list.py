import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import article as shared_article
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionArticlesListPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionArticlesListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionArticlesListRequest:
    path_params: PrivateCollectionArticlesListPathParams = dataclasses.field()
    security: PrivateCollectionArticlesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionArticlesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[shared_article.Article]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
