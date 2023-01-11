package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListScoreTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public ListScoreTracksPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}