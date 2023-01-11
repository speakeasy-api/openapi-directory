import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import createadrequest as shared_createadrequest


@dataclasses.dataclass
class CreateAdByListingIDPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAdByListingIDSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateAdByListingIDRequest:
    path_params: CreateAdByListingIDPathParams = dataclasses.field()
    request: shared_createadrequest.CreateAdRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAdByListingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAdByListingIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_ad_by_listing_id_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
