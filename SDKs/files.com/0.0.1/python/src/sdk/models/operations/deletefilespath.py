import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteFilesPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFilesPathQueryParams:
    recursive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteFilesPathRequest:
    path_params: DeleteFilesPathPathParams = dataclasses.field()
    query_params: DeleteFilesPathQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFilesPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
