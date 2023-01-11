import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import privatelinkcreator as shared_privatelinkcreator
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticlePrivateLinkUpdatePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    link_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkUpdateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkUpdateRequest:
    path_params: PrivateArticlePrivateLinkUpdatePathParams = dataclasses.field()
    security: PrivateArticlePrivateLinkUpdateSecurity = dataclasses.field()
    request: Optional[shared_privatelinkcreator.PrivateLinkCreator] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PrivateArticlePrivateLinkUpdateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
