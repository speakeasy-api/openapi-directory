package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsUpdateCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public GistsUpdateCommentPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsUpdateCommentPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}