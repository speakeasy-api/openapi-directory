import dataclasses



@dataclasses.dataclass
class DeleteBundlesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBundlesIDRequest:
    path_params: DeleteBundlesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBundlesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
