package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteV3BoardsBoardIdAssetsAssetIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asset_id")
    public String assetId;
    public DeleteV3BoardsBoardIdAssetsAssetIdPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=board_id")
    public String boardId;
    public DeleteV3BoardsBoardIdAssetsAssetIdPathParams withBoardId(String boardId) {
        this.boardId = boardId;
        return this;
    }
}