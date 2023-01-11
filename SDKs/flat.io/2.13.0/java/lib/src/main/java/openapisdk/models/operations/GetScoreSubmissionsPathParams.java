package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreSubmissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public GetScoreSubmissionsPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}