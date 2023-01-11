import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkdeleteadrequest as shared_bulkdeleteadrequest
from ..shared import bulkdeleteadresponse as shared_bulkdeleteadresponse


@dataclasses.dataclass
class BulkDeleteAdsByListingIDPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BulkDeleteAdsByListingIDSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BulkDeleteAdsByListingIDRequest:
    path_params: BulkDeleteAdsByListingIDPathParams = dataclasses.field()
    request: shared_bulkdeleteadrequest.BulkDeleteAdRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkDeleteAdsByListingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BulkDeleteAdsByListingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_delete_ad_response: Optional[shared_bulkdeleteadresponse.BulkDeleteAdResponse] = dataclasses.field(default=None)
    
