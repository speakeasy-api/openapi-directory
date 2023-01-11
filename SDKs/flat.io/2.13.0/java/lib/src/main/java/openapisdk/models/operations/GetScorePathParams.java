package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public GetScorePathParams withScore(String score) {
        this.score = score;
        return this;
    }
}