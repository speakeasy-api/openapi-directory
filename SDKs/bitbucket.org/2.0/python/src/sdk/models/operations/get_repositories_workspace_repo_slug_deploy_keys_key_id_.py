import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams:
    key_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDPathParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deploy_key: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
