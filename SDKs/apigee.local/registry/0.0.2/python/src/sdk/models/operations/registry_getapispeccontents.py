import dataclasses



@dataclasses.dataclass
class RegistryGetAPISpecContentsPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryGetAPISpecContentsRequest:
    path_params: RegistryGetAPISpecContentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryGetAPISpecContentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
