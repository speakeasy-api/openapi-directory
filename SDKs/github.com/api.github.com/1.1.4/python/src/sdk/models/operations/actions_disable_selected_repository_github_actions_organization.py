import dataclasses



@dataclasses.dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest:
    path_params: ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
