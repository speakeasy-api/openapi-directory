import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkcreateadrequest as shared_bulkcreateadrequest
from ..shared import bulkadresponse as shared_bulkadresponse


@dataclasses.dataclass
class BulkUpdateAdsBidByListingIDPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BulkUpdateAdsBidByListingIDSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BulkUpdateAdsBidByListingIDRequest:
    path_params: BulkUpdateAdsBidByListingIDPathParams = dataclasses.field()
    request: shared_bulkcreateadrequest.BulkCreateAdRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkUpdateAdsBidByListingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BulkUpdateAdsBidByListingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_ad_response: Optional[shared_bulkadresponse.BulkAdResponse] = dataclasses.field(default=None)
    
