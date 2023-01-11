package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScoreCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment")
    public String comment;
    public UpdateScoreCommentPathParams withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public UpdateScoreCommentPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}