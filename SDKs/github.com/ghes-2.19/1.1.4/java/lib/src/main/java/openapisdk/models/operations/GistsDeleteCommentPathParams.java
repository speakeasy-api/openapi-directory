package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsDeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public GistsDeleteCommentPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsDeleteCommentPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}