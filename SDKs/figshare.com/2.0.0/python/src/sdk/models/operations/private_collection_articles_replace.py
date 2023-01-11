import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import articlescreator as shared_articlescreator
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionArticlesReplacePathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionArticlesReplaceSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionArticlesReplaceRequest:
    path_params: PrivateCollectionArticlesReplacePathParams = dataclasses.field()
    request: shared_articlescreator.ArticlesCreator = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateCollectionArticlesReplaceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionArticlesReplaceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
