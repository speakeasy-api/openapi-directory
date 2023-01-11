import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import articleembargoupdater as shared_articleembargoupdater
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleEmbargoUpdatePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleEmbargoUpdateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleEmbargoUpdateRequest:
    path_params: PrivateArticleEmbargoUpdatePathParams = dataclasses.field()
    request: shared_articleembargoupdater.ArticleEmbargoUpdater = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateArticleEmbargoUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleEmbargoUpdateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
