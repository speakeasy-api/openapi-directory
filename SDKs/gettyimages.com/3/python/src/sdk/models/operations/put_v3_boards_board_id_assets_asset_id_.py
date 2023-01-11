import dataclasses



@dataclasses.dataclass
class PutV3BoardsBoardIDAssetsAssetIDPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutV3BoardsBoardIDAssetsAssetIDRequest:
    path_params: PutV3BoardsBoardIDAssetsAssetIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutV3BoardsBoardIDAssetsAssetIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
