import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import articleupdate as shared_articleupdate
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleUpdatePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleUpdateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleUpdateRequest:
    path_params: PrivateArticleUpdatePathParams = dataclasses.field()
    request: shared_articleupdate.ArticleUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateArticleUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleUpdateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
