import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import articlecreate as shared_articlecreate
from ..shared import errormessage as shared_errormessage
from ..shared import location as shared_location


@dataclasses.dataclass
class PrivateArticleCreateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleCreateRequest:
    request: shared_articlecreate.ArticleCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateArticleCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    
