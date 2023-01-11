import dataclasses



@dataclasses.dataclass
class RegistryDeleteProjectPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryDeleteProjectRequest:
    path_params: RegistryDeleteProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryDeleteProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
