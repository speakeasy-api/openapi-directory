import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security

class GetAPIV1DonationsCryptoCalculateCurrencyEnum(str, Enum):
    ETH = "eth"
    BTC = "btc"


@dataclasses.dataclass
class GetAPIV1DonationsCryptoCalculateQueryParams:
    currency: GetAPIV1DonationsCryptoCalculateCurrencyEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    count: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIV1DonationsCryptoCalculateSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAPIV1DonationsCryptoCalculateRequest:
    query_params: GetAPIV1DonationsCryptoCalculateQueryParams = dataclasses.field()
    security: GetAPIV1DonationsCryptoCalculateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV1DonationsCryptoCalculateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
