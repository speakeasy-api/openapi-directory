import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import articleembargo as shared_articleembargo
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleEmbargoDetailsPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleEmbargoDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleEmbargoDetailsRequest:
    path_params: PrivateArticleEmbargoDetailsPathParams = dataclasses.field()
    security: PrivateArticleEmbargoDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleEmbargoDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_embargo: Optional[shared_articleembargo.ArticleEmbargo] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
