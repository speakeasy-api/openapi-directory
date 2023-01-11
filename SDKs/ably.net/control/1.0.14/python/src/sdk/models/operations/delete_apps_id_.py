import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteAppsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAppsIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteAppsIDRequest:
    path_params: DeleteAppsIDPathParams = dataclasses.field()
    security: DeleteAppsIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAppsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
