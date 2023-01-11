package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public GetScoreTrackPathParams withScore(String score) {
        this.score = score;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track")
    public String track;
    public GetScoreTrackPathParams withTrack(String track) {
        this.track = track;
        return this;
    }
}