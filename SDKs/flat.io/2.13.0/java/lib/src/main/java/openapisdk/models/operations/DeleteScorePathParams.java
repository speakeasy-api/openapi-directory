package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public DeleteScorePathParams withScore(String score) {
        this.score = score;
        return this;
    }
}