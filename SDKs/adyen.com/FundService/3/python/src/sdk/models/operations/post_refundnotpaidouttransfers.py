import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class PostRefundNotPaidOutTransfersSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PostRefundNotPaidOutTransfersRequest:
    security: PostRefundNotPaidOutTransfersSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRefundNotPaidOutTransfersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    refund_not_paid_out_transfers_response: Optional[Any] = dataclasses.field(default=None)
    service_error: Optional[Any] = dataclasses.field(default=None)
    
