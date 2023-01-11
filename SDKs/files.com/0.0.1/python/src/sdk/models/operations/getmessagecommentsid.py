import dataclasses
from typing import Optional
from ..shared import messagecommententity as shared_messagecommententity


@dataclasses.dataclass
class GetMessageCommentsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessageCommentsIDRequest:
    path_params: GetMessageCommentsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessageCommentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_comment_entity: Optional[shared_messagecommententity.MessageCommentEntity] = dataclasses.field(default=None)
    
