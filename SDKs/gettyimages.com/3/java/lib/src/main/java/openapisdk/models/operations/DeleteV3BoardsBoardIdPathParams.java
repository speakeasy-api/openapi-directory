package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteV3BoardsBoardIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=board_id")
    public String boardId;
    public DeleteV3BoardsBoardIdPathParams withBoardId(String boardId) {
        this.boardId = boardId;
        return this;
    }
}