import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import privatelink as shared_privatelink


@dataclasses.dataclass
class PrivateCollectionPrivateLinksListPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionPrivateLinksListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionPrivateLinksListRequest:
    path_params: PrivateCollectionPrivateLinksListPathParams = dataclasses.field()
    security: PrivateCollectionPrivateLinksListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionPrivateLinksListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    private_links: Optional[list[shared_privatelink.PrivateLink]] = dataclasses.field(default=None)
    
