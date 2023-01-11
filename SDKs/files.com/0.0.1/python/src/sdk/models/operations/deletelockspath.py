import dataclasses



@dataclasses.dataclass
class DeleteLocksPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLocksPathQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteLocksPathRequest:
    path_params: DeleteLocksPathPathParams = dataclasses.field()
    query_params: DeleteLocksPathQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLocksPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
