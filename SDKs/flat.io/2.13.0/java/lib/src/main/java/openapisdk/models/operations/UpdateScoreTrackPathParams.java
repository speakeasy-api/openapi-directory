package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScoreTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public UpdateScoreTrackPathParams withScore(String score) {
        this.score = score;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track")
    public String track;
    public UpdateScoreTrackPathParams withTrack(String track) {
        this.track = track;
        return this;
    }
}