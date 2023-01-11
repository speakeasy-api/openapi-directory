import dataclasses



@dataclasses.dataclass
class DeleteTokenPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTokenRequest:
    path_params: DeleteTokenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
