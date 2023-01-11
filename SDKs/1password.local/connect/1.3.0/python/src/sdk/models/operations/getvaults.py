import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse
from ..shared import vault as shared_vault


@dataclasses.dataclass
class GetVaultsQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVaultsSecurity:
    connect_token: shared_security.SchemeConnectToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetVaultsRequest:
    query_params: GetVaultsQueryParams = dataclasses.field()
    security: GetVaultsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVaultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    vaults: Optional[list[shared_vault.Vault]] = dataclasses.field(default=None)
    
