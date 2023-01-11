import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetLegalEntitiesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLegalEntitiesIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetLegalEntitiesIDRequest:
    path_params: GetLegalEntitiesIDPathParams = dataclasses.field()
    security: GetLegalEntitiesIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetLegalEntitiesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legal_entity: Optional[Any] = dataclasses.field(default=None)
    service_error: Optional[Any] = dataclasses.field(default=None)
    
