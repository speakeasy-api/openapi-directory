import dataclasses



@dataclasses.dataclass
class RegistryDeleteAPISpecRevisionPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryDeleteAPISpecRevisionRequest:
    path_params: RegistryDeleteAPISpecRevisionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryDeleteAPISpecRevisionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
