import dataclasses



@dataclasses.dataclass
class DeleteFileCommentsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFileCommentsIDRequest:
    path_params: DeleteFileCommentsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFileCommentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
