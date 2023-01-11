import dataclasses
from typing import Optional
from ..shared import scim_error as shared_scim_error


@dataclasses.dataclass
class ScimDeleteUserFromOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    scim_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScimDeleteUserFromOrgRequest:
    path_params: ScimDeleteUserFromOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScimDeleteUserFromOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    
