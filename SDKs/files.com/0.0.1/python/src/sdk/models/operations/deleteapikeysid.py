import dataclasses



@dataclasses.dataclass
class DeleteAPIKeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAPIKeysIDRequest:
    path_params: DeleteAPIKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAPIKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
