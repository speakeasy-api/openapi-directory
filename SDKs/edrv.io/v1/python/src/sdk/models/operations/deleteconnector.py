import dataclasses



@dataclasses.dataclass
class DeleteConnectorPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConnectorRequest:
    path_params: DeleteConnectorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteConnectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
