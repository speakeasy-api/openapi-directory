import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import articleconfidentiality as shared_articleconfidentiality
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleConfidentialityDetailsPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleConfidentialityDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleConfidentialityDetailsRequest:
    path_params: PrivateArticleConfidentialityDetailsPathParams = dataclasses.field()
    security: PrivateArticleConfidentialityDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleConfidentialityDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    article_confidentiality: Optional[shared_articleconfidentiality.ArticleConfidentiality] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
