import dataclasses
from typing import Optional
from ..shared import boardinfo as shared_boardinfo


@dataclasses.dataclass
class PutV3BoardsBoardIDPathParams:
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutV3BoardsBoardIDRequest:
    path_params: PutV3BoardsBoardIDPathParams = dataclasses.field()
    request: Optional[shared_boardinfo.BoardInfo] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutV3BoardsBoardIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
