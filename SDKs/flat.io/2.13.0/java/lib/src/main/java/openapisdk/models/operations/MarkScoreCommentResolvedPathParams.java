package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MarkScoreCommentResolvedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment")
    public String comment;
    public MarkScoreCommentResolvedPathParams withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public MarkScoreCommentResolvedPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}