import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ratetableresponse as shared_ratetableresponse


@dataclasses.dataclass
class GetRateTablesQueryParams:
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country_code', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRateTablesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRateTablesRequest:
    query_params: GetRateTablesQueryParams = dataclasses.field()
    security: GetRateTablesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRateTablesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rate_table_response: Optional[shared_ratetableresponse.RateTableResponse] = dataclasses.field(default=None)
    
