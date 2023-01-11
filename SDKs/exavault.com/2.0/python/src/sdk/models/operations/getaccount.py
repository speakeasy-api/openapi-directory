import dataclasses
from typing import Optional
from ..shared import accountresponse as shared_accountresponse


@dataclasses.dataclass
class GetAccountQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountRequest:
    headers: GetAccountHeaders = dataclasses.field()
    query_params: GetAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_response: Optional[shared_accountresponse.AccountResponse] = dataclasses.field(default=None)
    
