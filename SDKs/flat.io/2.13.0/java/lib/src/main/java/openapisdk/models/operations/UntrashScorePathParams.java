package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntrashScorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public UntrashScorePathParams withScore(String score) {
        this.score = score;
        return this;
    }
}