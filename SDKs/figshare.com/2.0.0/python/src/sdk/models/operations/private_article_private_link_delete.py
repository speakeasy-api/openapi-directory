import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticlePrivateLinkDeletePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    link_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkDeleteSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkDeleteRequest:
    path_params: PrivateArticlePrivateLinkDeletePathParams = dataclasses.field()
    security: PrivateArticlePrivateLinkDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
