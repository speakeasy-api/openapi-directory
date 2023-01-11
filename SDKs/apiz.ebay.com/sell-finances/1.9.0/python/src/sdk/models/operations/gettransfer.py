import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import transfer as shared_transfer


@dataclasses.dataclass
class GetTransferPathParams:
    transfer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transfer_Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransferSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTransferRequest:
    path_params: GetTransferPathParams = dataclasses.field()
    security: GetTransferSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTransferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    transfer: Optional[shared_transfer.Transfer] = dataclasses.field(default=None)
    
