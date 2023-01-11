import dataclasses



@dataclasses.dataclass
class WatchlistSearchallReadPathParams:
    param: str = dataclasses.field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WatchlistSearchallReadRequest:
    path_params: WatchlistSearchallReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WatchlistSearchallReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
