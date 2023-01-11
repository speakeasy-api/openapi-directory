package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScoreCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment")
    public String comment;
    public DeleteScoreCommentPathParams withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public DeleteScoreCommentPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}