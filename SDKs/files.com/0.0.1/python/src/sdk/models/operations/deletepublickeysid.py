import dataclasses



@dataclasses.dataclass
class DeletePublicKeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePublicKeysIDRequest:
    path_params: DeletePublicKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePublicKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
