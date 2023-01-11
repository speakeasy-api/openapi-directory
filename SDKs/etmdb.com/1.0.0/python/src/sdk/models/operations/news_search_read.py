import dataclasses



@dataclasses.dataclass
class NewsSearchReadPathParams:
    title: str = dataclasses.field(metadata={'path_param': { 'field_name': 'title', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NewsSearchReadRequest:
    path_params: NewsSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NewsSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
