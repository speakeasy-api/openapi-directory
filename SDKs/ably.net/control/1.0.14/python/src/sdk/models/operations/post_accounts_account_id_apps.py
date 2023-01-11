import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import app_post as shared_app_post
from ..shared import app_response as shared_app_response
from ..shared import error as shared_error


@dataclasses.dataclass
class PostAccountsAccountIDAppsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAccountsAccountIDAppsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PostAccountsAccountIDAppsRequest:
    path_params: PostAccountsAccountIDAppsPathParams = dataclasses.field()
    security: PostAccountsAccountIDAppsSecurity = dataclasses.field()
    request: Optional[shared_app_post.AppPost] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAccountsAccountIDAppsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_response: Optional[shared_app_response.AppResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
