import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security

class PostAPIV1DonationsCreateFundingSourceEnum(str, Enum):
    MERCHANT = "merchant"
    CUSTOMER = "customer"


@dataclasses.dataclass
class PostAPIV1DonationsCreateQueryParams:
    amount: str = dataclasses.field(metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    funding_source: PostAPIV1DonationsCreateFundingSourceEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'funding_source', 'style': 'form', 'explode': True }})
    nonprofit_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'nonprofit_id', 'style': 'form', 'explode': True }})
    zip_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip_code', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAPIV1DonationsCreateSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PostAPIV1DonationsCreateRequest:
    query_params: PostAPIV1DonationsCreateQueryParams = dataclasses.field()
    security: PostAPIV1DonationsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostAPIV1DonationsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
