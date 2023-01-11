import dataclasses
from typing import Optional
from ..shared import boardasset as shared_boardasset
from ..shared import addboardassetsresult as shared_addboardassetsresult


@dataclasses.dataclass
class PutV3BoardsBoardIDAssetsPathParams:
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutV3BoardsBoardIDAssetsRequest:
    path_params: PutV3BoardsBoardIDAssetsPathParams = dataclasses.field()
    request: Optional[list[shared_boardasset.BoardAsset]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutV3BoardsBoardIDAssetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_board_assets_result: Optional[shared_addboardassetsresult.AddBoardAssetsResult] = dataclasses.field(default=None)
    
