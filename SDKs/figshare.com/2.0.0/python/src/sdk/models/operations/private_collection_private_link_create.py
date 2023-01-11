import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectionprivatelinkcreator as shared_collectionprivatelinkcreator
from ..shared import errormessage as shared_errormessage
from ..shared import location as shared_location


@dataclasses.dataclass
class PrivateCollectionPrivateLinkCreatePathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionPrivateLinkCreateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionPrivateLinkCreateRequest:
    path_params: PrivateCollectionPrivateLinkCreatePathParams = dataclasses.field()
    security: PrivateCollectionPrivateLinkCreateSecurity = dataclasses.field()
    request: Optional[shared_collectionprivatelinkcreator.CollectionPrivateLinkCreator] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PrivateCollectionPrivateLinkCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    
