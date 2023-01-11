import dataclasses



@dataclasses.dataclass
class RegistryDeleteAPIPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryDeleteAPIRequest:
    path_params: RegistryDeleteAPIPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryDeleteAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
