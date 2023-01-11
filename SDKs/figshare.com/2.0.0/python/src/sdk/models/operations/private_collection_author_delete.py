import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionAuthorDeletePathParams:
    author_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'author_id', 'style': 'simple', 'explode': False }})
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionAuthorDeleteSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionAuthorDeleteRequest:
    path_params: PrivateCollectionAuthorDeletePathParams = dataclasses.field()
    security: PrivateCollectionAuthorDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionAuthorDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
