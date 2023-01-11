import dataclasses
from typing import Optional
from ..shared import boardinfo as shared_boardinfo
from ..shared import boardcreated as shared_boardcreated


@dataclasses.dataclass
class PostV3BoardsRequest:
    request: Optional[shared_boardinfo.BoardInfo] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV3BoardsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    board_created: Optional[shared_boardcreated.BoardCreated] = dataclasses.field(default=None)
    
