import dataclasses



@dataclasses.dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDPathParams:
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    comment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDRequest:
    path_params: DeleteV3BoardsBoardIDCommentsCommentIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
