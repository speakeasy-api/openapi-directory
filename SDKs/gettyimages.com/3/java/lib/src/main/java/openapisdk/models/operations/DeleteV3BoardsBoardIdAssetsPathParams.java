package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteV3BoardsBoardIdAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=board_id")
    public String boardId;
    public DeleteV3BoardsBoardIdAssetsPathParams withBoardId(String boardId) {
        this.boardId = boardId;
        return this;
    }
}