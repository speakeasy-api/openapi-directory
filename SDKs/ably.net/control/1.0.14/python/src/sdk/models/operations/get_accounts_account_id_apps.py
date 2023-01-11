import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import app_response as shared_app_response
from ..shared import error as shared_error


@dataclasses.dataclass
class GetAccountsAccountIDAppsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsAccountIDAppsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountsAccountIDAppsRequest:
    path_params: GetAccountsAccountIDAppsPathParams = dataclasses.field()
    security: GetAccountsAccountIDAppsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsAccountIDAppsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_responses: Optional[list[shared_app_response.AppResponse]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
