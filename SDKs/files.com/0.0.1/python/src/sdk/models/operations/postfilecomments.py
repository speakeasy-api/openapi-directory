import dataclasses
from typing import Optional
from ..shared import filecommententity as shared_filecommententity


@dataclasses.dataclass
class PostFileCommentsRequestBody:
    body: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'body' }})
    path: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'path' }})
    

@dataclasses.dataclass
class PostFileCommentsRequest:
    request: PostFileCommentsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostFileCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_comment_entity: Optional[shared_filecommententity.FileCommentEntity] = dataclasses.field(default=None)
    
