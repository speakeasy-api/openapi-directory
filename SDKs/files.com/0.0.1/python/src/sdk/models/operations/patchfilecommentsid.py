import dataclasses
from typing import Optional
from ..shared import filecommententity as shared_filecommententity


@dataclasses.dataclass
class PatchFileCommentsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchFileCommentsIDRequestBody:
    body: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'body' }})
    

@dataclasses.dataclass
class PatchFileCommentsIDRequest:
    path_params: PatchFileCommentsIDPathParams = dataclasses.field()
    request: PatchFileCommentsIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchFileCommentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_comment_entity: Optional[shared_filecommententity.FileCommentEntity] = dataclasses.field(default=None)
    
