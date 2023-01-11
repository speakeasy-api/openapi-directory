import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import authorscreator as shared_authorscreator
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleAuthorsAddPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleAuthorsAddSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleAuthorsAddRequest:
    path_params: PrivateArticleAuthorsAddPathParams = dataclasses.field()
    request: shared_authorscreator.AuthorsCreator = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateArticleAuthorsAddSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleAuthorsAddResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
