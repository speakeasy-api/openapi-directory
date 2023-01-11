import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteV3BoardsBoardIDAssetsPathParams:
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDAssetsQueryParams:
    asset_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'asset_ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDAssetsRequest:
    path_params: DeleteV3BoardsBoardIDAssetsPathParams = dataclasses.field()
    query_params: DeleteV3BoardsBoardIDAssetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDAssetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
