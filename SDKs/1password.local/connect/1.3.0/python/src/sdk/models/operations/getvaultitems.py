import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse
from ..shared import item as shared_item


@dataclasses.dataclass
class GetVaultItemsPathParams:
    vault_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVaultItemsQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVaultItemsSecurity:
    connect_token: shared_security.SchemeConnectToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetVaultItemsRequest:
    path_params: GetVaultItemsPathParams = dataclasses.field()
    query_params: GetVaultItemsQueryParams = dataclasses.field()
    security: GetVaultItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVaultItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    items: Optional[list[shared_item.Item]] = dataclasses.field(default=None)
    
