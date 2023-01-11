import dataclasses



@dataclasses.dataclass
class DeleteMessageCommentReactionsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMessageCommentReactionsIDRequest:
    path_params: DeleteMessageCommentReactionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMessageCommentReactionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
