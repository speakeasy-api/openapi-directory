package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutV3BoardsBoardIdAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=board_id")
    public String boardId;
    public PutV3BoardsBoardIdAssetsPathParams withBoardId(String boardId) {
        this.boardId = boardId;
        return this;
    }
}