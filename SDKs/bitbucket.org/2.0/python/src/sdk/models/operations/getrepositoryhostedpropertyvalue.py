import dataclasses



@dataclasses.dataclass
class GetRepositoryHostedPropertyValuePathParams:
    app_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryHostedPropertyValueRequest:
    path_params: GetRepositoryHostedPropertyValuePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryHostedPropertyValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
