import dataclasses



@dataclasses.dataclass
class DeleteClickwrapsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteClickwrapsIDRequest:
    path_params: DeleteClickwrapsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteClickwrapsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
