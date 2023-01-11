import dataclasses



@dataclasses.dataclass
class PostTreeActivationQueryParams:
    ignoredeactivated: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'ignoredeactivated', 'style': 'form', 'explode': True }})
    onlymodified: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'onlymodified', 'style': 'form', 'explode': True }})
    path: str = dataclasses.field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostTreeActivationRequest:
    query_params: PostTreeActivationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostTreeActivationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
