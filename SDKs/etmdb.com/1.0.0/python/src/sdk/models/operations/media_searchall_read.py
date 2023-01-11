import dataclasses



@dataclasses.dataclass
class MediaSearchallReadPathParams:
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MediaSearchallReadRequest:
    path_params: MediaSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MediaSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
