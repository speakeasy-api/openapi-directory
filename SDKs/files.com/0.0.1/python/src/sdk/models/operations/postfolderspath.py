import dataclasses
from typing import Optional
from ..shared import fileentity as shared_fileentity


@dataclasses.dataclass
class PostFoldersPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostFoldersPathRequest:
    path_params: PostFoldersPathPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostFoldersPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_entity: Optional[shared_fileentity.FileEntity] = dataclasses.field(default=None)
    
