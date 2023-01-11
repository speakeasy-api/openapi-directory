import dataclasses



@dataclasses.dataclass
class DeleteMessageCommentsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMessageCommentsIDRequest:
    path_params: DeleteMessageCommentsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMessageCommentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
