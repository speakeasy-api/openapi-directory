import dataclasses



@dataclasses.dataclass
class DeleteV3BoardsBoardIDAssetsAssetIDPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDAssetsAssetIDRequest:
    path_params: DeleteV3BoardsBoardIDAssetsAssetIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDAssetsAssetIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
