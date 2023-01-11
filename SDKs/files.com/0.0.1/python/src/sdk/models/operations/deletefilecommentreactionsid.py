import dataclasses



@dataclasses.dataclass
class DeleteFileCommentReactionsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFileCommentReactionsIDRequest:
    path_params: DeleteFileCommentReactionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFileCommentReactionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
