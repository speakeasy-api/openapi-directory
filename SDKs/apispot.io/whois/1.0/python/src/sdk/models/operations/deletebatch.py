import dataclasses



@dataclasses.dataclass
class DeleteBatchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBatchRequest:
    path_params: DeleteBatchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
