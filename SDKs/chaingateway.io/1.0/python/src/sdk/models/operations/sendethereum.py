import dataclasses
from typing import Optional
from ..shared import sendethereumrequest as shared_sendethereumrequest
from ..shared import sendethereum as shared_sendethereum


@dataclasses.dataclass
class SendEthereumHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendEthereumRequest:
    headers: SendEthereumHeaders = dataclasses.field()
    request: shared_sendethereumrequest.SendEthereumRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendEthereumResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    send_ethereum: Optional[shared_sendethereum.SendEthereum] = dataclasses.field(default=None)
    
