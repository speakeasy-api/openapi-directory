import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import responsemessage as shared_responsemessage


@dataclasses.dataclass
class PrivateProjectPublishPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectPublishSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectPublishRequest:
    path_params: PrivateProjectPublishPathParams = dataclasses.field()
    security: PrivateProjectPublishSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectPublishResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    response_message: Optional[shared_responsemessage.ResponseMessage] = dataclasses.field(default=None)
    
