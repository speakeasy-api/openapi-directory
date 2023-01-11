import dataclasses
from typing import Optional
from ..shared import messagecommententity as shared_messagecommententity


@dataclasses.dataclass
class PatchMessageCommentsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchMessageCommentsIDRequestBody:
    body: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'body' }})
    

@dataclasses.dataclass
class PatchMessageCommentsIDRequest:
    path_params: PatchMessageCommentsIDPathParams = dataclasses.field()
    request: PatchMessageCommentsIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchMessageCommentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_comment_entity: Optional[shared_messagecommententity.MessageCommentEntity] = dataclasses.field(default=None)
    
