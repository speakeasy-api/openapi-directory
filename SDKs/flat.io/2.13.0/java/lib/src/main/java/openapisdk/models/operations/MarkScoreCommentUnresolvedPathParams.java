package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MarkScoreCommentUnresolvedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment")
    public String comment;
    public MarkScoreCommentUnresolvedPathParams withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public MarkScoreCommentUnresolvedPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}