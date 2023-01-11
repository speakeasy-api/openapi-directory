import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import privatelinkcreator as shared_privatelinkcreator
from ..shared import errormessage as shared_errormessage
from ..shared import location as shared_location


@dataclasses.dataclass
class PrivateArticlePrivateLinkCreatePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkCreateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkCreateRequest:
    path_params: PrivateArticlePrivateLinkCreatePathParams = dataclasses.field()
    security: PrivateArticlePrivateLinkCreateSecurity = dataclasses.field()
    request: Optional[shared_privatelinkcreator.PrivateLinkCreator] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    
