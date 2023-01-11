import dataclasses



@dataclasses.dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams:
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest:
    path_params: GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
