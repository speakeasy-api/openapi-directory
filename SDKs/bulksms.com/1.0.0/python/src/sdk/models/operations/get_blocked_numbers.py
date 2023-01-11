import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import blockednumber as shared_blockednumber


@dataclasses.dataclass
class GetBlockedNumbersQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    min_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min-id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBlockedNumbersSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetBlockedNumbersRequest:
    query_params: GetBlockedNumbersQueryParams = dataclasses.field()
    security: GetBlockedNumbersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBlockedNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    blocked_number: Optional[shared_blockednumber.BlockedNumber] = dataclasses.field(default=None)
    
