import dataclasses



@dataclasses.dataclass
class DeleteMessageReactionsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMessageReactionsIDRequest:
    path_params: DeleteMessageReactionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMessageReactionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
