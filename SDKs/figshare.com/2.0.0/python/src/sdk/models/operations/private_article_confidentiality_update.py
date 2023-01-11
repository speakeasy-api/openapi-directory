import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import confidentialitycreator as shared_confidentialitycreator
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleConfidentialityUpdatePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleConfidentialityUpdateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleConfidentialityUpdateRequest:
    path_params: PrivateArticleConfidentialityUpdatePathParams = dataclasses.field()
    request: shared_confidentialitycreator.ConfidentialityCreator = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateArticleConfidentialityUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleConfidentialityUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
