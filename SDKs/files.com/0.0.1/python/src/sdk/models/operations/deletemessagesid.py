import dataclasses



@dataclasses.dataclass
class DeleteMessagesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMessagesIDRequest:
    path_params: DeleteMessagesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMessagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
