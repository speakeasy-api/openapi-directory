import dataclasses



@dataclasses.dataclass
class RegistryDeleteAPIVersionPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryDeleteAPIVersionRequest:
    path_params: RegistryDeleteAPIVersionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryDeleteAPIVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
