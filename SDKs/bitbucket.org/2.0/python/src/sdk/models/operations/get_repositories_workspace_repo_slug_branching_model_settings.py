import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams = dataclasses.field()
    security: GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    branching_model_settings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
