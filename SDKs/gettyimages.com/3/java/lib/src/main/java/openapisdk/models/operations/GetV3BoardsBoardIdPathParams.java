package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3BoardsBoardIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=board_id")
    public String boardId;
    public GetV3BoardsBoardIdPathParams withBoardId(String boardId) {
        this.boardId = boardId;
        return this;
    }
}