import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import articledoi as shared_articledoi
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleReserveDoiPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleReserveDoiSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleReserveDoiRequest:
    path_params: PrivateArticleReserveDoiPathParams = dataclasses.field()
    security: PrivateArticleReserveDoiSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleReserveDoiResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_doi: Optional[shared_articledoi.ArticleDoi] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
