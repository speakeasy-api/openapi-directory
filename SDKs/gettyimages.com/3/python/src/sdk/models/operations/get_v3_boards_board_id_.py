import dataclasses
from typing import Optional
from ..shared import boarddetail as shared_boarddetail


@dataclasses.dataclass
class GetV3BoardsBoardIDPathParams:
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3BoardsBoardIDRequest:
    path_params: GetV3BoardsBoardIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3BoardsBoardIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    board_detail: Optional[shared_boarddetail.BoardDetail] = dataclasses.field(default=None)
    
