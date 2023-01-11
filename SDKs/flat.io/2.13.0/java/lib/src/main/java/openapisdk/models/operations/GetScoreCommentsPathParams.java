package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public GetScoreCommentsPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}