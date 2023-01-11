package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddScoreTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public AddScoreTrackPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}