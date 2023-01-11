import dataclasses



@dataclasses.dataclass
class PostPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPathQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': ':name', 'style': 'form', 'explode': True }})
    jcr_primary_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'jcr:primaryType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostPathRequest:
    path_params: PostPathPathParams = dataclasses.field()
    query_params: PostPathQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
