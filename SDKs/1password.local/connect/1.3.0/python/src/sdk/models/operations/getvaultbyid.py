import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse
from ..shared import vault as shared_vault


@dataclasses.dataclass
class GetVaultByIDPathParams:
    vault_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVaultByIDSecurity:
    connect_token: shared_security.SchemeConnectToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetVaultByIDRequest:
    path_params: GetVaultByIDPathParams = dataclasses.field()
    security: GetVaultByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVaultByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    vault: Optional[shared_vault.Vault] = dataclasses.field(default=None)
    
