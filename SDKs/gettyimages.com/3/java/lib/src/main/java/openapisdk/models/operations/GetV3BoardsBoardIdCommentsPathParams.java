package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3BoardsBoardIdCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=board_id")
    public String boardId;
    public GetV3BoardsBoardIdCommentsPathParams withBoardId(String boardId) {
        this.boardId = boardId;
        return this;
    }
}