import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import articlehandle as shared_articlehandle
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleReserveHandlePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleReserveHandleSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleReserveHandleRequest:
    path_params: PrivateArticleReserveHandlePathParams = dataclasses.field()
    security: PrivateArticleReserveHandleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleReserveHandleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_handle: Optional[shared_articlehandle.ArticleHandle] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
