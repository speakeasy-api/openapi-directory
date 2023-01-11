import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import authorscreator as shared_authorscreator
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionAuthorsReplacePathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionAuthorsReplaceSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionAuthorsReplaceRequest:
    path_params: PrivateCollectionAuthorsReplacePathParams = dataclasses.field()
    request: shared_authorscreator.AuthorsCreator = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateCollectionAuthorsReplaceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionAuthorsReplaceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
