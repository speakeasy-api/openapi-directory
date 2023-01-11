import dataclasses



@dataclasses.dataclass
class ActionsRemoveSelectedRepoFromOrgSecretPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsRemoveSelectedRepoFromOrgSecretRequest:
    path_params: ActionsRemoveSelectedRepoFromOrgSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsRemoveSelectedRepoFromOrgSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
