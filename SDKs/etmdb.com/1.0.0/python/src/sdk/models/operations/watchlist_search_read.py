import dataclasses



@dataclasses.dataclass
class WatchlistSearchReadPathParams:
    movie_title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WatchlistSearchReadRequest:
    path_params: WatchlistSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WatchlistSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
