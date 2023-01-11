import dataclasses
from typing import Optional
from ..shared import customerinforesponse as shared_customerinforesponse


@dataclasses.dataclass
class GetV3CustomersCurrentHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3CustomersCurrentRequest:
    headers: GetV3CustomersCurrentHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetV3CustomersCurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_info_response: Optional[shared_customerinforesponse.CustomerInfoResponse] = dataclasses.field(default=None)
    
