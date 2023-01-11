package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutV3BoardsBoardIdAssetsAssetIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=asset_id")
    public String assetId;
    public PutV3BoardsBoardIdAssetsAssetIdPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=board_id")
    public String boardId;
    public PutV3BoardsBoardIdAssetsAssetIdPathParams withBoardId(String boardId) {
        this.boardId = boardId;
        return this;
    }
}