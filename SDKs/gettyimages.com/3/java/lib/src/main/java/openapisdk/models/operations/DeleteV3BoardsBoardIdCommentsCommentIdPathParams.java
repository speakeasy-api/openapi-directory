package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteV3BoardsBoardIdCommentsCommentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=board_id")
    public String boardId;
    public DeleteV3BoardsBoardIdCommentsCommentIdPathParams withBoardId(String boardId) {
        this.boardId = boardId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public String commentId;
    public DeleteV3BoardsBoardIdCommentsCommentIdPathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
}