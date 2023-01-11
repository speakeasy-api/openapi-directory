package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ForkScorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public ForkScorePathParams withScore(String score) {
        this.score = score;
        return this;
    }
}