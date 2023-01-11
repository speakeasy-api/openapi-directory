package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostScoreCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public PostScoreCommentPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}