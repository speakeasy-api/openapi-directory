import dataclasses
from typing import Optional
from ..shared import resendfailedipnrequest as shared_resendfailedipnrequest
from ..shared import resendfailedipn as shared_resendfailedipn


@dataclasses.dataclass
class ResendFailedIpnHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResendFailedIpnRequest:
    headers: ResendFailedIpnHeaders = dataclasses.field()
    request: shared_resendfailedipnrequest.ResendFailedIpnRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ResendFailedIpnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resend_failed_ipn: Optional[shared_resendfailedipn.ResendFailedIpn] = dataclasses.field(default=None)
    
