import dataclasses



@dataclasses.dataclass
class GetConfigurationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigurationRequest:
    path_params: GetConfigurationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
