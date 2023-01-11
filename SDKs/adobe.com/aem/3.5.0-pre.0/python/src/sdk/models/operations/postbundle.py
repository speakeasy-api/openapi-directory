import dataclasses



@dataclasses.dataclass
class PostBundlePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostBundleQueryParams:
    action: str = dataclasses.field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostBundleRequest:
    path_params: PostBundlePathParams = dataclasses.field()
    query_params: PostBundleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostBundleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
