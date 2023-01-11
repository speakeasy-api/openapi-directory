import dataclasses
from typing import Optional
from ..shared import commentslist as shared_commentslist


@dataclasses.dataclass
class GetV3BoardsBoardIDCommentsPathParams:
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3BoardsBoardIDCommentsRequest:
    path_params: GetV3BoardsBoardIDCommentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3BoardsBoardIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comments_list: Optional[shared_commentslist.CommentsList] = dataclasses.field(default=None)
    
