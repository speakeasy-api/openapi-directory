import dataclasses



@dataclasses.dataclass
class PostConfigPropertyPathParams:
    config_node_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configNodeName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostConfigPropertyRequest:
    path_params: PostConfigPropertyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostConfigPropertyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
