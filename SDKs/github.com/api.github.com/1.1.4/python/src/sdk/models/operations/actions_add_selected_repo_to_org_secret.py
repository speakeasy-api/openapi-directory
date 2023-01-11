import dataclasses



@dataclasses.dataclass
class ActionsAddSelectedRepoToOrgSecretPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsAddSelectedRepoToOrgSecretRequest:
    path_params: ActionsAddSelectedRepoToOrgSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsAddSelectedRepoToOrgSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
