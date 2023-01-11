import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import projectcompleteprivate as shared_projectcompleteprivate


@dataclasses.dataclass
class PrivateProjectDetailsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectDetailsRequest:
    path_params: PrivateProjectDetailsPathParams = dataclasses.field()
    security: PrivateProjectDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    project_complete_private: Optional[shared_projectcompleteprivate.ProjectCompletePrivate] = dataclasses.field(default=None)
    
