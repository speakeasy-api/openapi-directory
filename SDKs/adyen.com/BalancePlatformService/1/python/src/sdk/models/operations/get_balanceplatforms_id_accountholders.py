import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBalancePlatformsIDAccountHoldersPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBalancePlatformsIDAccountHoldersQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBalancePlatformsIDAccountHoldersSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetBalancePlatformsIDAccountHoldersRequest:
    path_params: GetBalancePlatformsIDAccountHoldersPathParams = dataclasses.field()
    query_params: GetBalancePlatformsIDAccountHoldersQueryParams = dataclasses.field()
    security: GetBalancePlatformsIDAccountHoldersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBalancePlatformsIDAccountHoldersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_account_holders_response: Optional[Any] = dataclasses.field(default=None)
    rest_service_error: Optional[Any] = dataclasses.field(default=None)
    
