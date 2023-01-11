import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleCategoryDeletePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    category_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleCategoryDeleteSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleCategoryDeleteRequest:
    path_params: PrivateArticleCategoryDeletePathParams = dataclasses.field()
    security: PrivateArticleCategoryDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleCategoryDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
