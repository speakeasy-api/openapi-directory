import dataclasses



@dataclasses.dataclass
class DeleteConfigPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConfigRequest:
    path_params: DeleteConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
