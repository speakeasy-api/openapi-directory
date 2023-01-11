import dataclasses



@dataclasses.dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONPathParams:
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONRequest:
    path_params: GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
